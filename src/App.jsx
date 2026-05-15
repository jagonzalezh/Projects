import { useEffect, useState } from 'react'
import { modules } from './data/modules'
import ModuleCard from './components/ModuleCard'
import ScenarioPlayer from './components/ScenarioPlayer'
import Dashboard from './components/Dashboard'

const STORAGE_KEY = 'emdr-telehealth-sim-v1'

const buildInitialProgress = () =>
  modules.reduce((acc, m) => {
    const maxScore = m.scenario.steps.length * 2
    acc[m.id] = { completed: false, score: 0, maxScore, currentStep: 0, lastFeedback: '', lastReaction: '' }
    return acc
  }, {})

export default function App() {
  const [activeView, setActiveView] = useState('dashboard')
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id)
  const [progress, setProgress] = useState(buildInitialProgress)
  const [reflection, setReflection] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      setProgress(parsed.progress)
      setReflection(parsed.reflection || '')
      setActiveModuleId(parsed.activeModuleId || modules[0].id)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress, reflection, activeModuleId }))
  }, [progress, reflection, activeModuleId])

  const openModule = (id) => {
    setActiveModuleId(id)
    setActiveView('module')
  }

  const onChoose = (choice) => {
    setProgress((prev) => {
      const current = prev[activeModuleId]
      const module = modules.find((m) => m.id === activeModuleId)
      const nextStep = current.currentStep + 1
      const completed = nextStep >= module.scenario.steps.length
      return {
        ...prev,
        [activeModuleId]: {
          ...current,
          score: current.score + choice.score,
          currentStep: nextStep,
          completed,
          lastFeedback: choice.feedback,
          lastReaction: choice.reaction,
        },
      }
    })
  }

  const resetModule = () => {
    setProgress((prev) => {
      const module = modules.find((m) => m.id === activeModuleId)
      return {
        ...prev,
        [activeModuleId]: {
          completed: false,
          score: 0,
          maxScore: module.scenario.steps.length * 2,
          currentStep: 0,
          lastFeedback: '',
          lastReaction: '',
        },
      }
    })
  }

  return (
    <div className="app">
      <header>
        <h1>EMDR Telehealth Skills Simulator</h1>
        <p>Interactive practice across readiness, safety, technology, presence, troubleshooting, and ethics.</p>
      </header>
      <nav>
        <button onClick={() => setActiveView('dashboard')}>Dashboard</button>
        <button onClick={() => setActiveView('modules')}>Modules</button>
        <button onClick={() => openModule(activeModuleId)}>Continue Module</button>
      </nav>

      {activeView === 'dashboard' && (
        <Dashboard
          modules={modules}
          progress={progress}
          reflection={reflection}
          onReflectionChange={setReflection}
        />
      )}

      {activeView === 'modules' && (
        <section className="module-grid">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} status={progress[module.id]} onOpen={openModule} />
          ))}
        </section>
      )}

      {activeView === 'module' && (
        <ScenarioPlayer
          module={modules.find((m) => m.id === activeModuleId)}
          status={progress[activeModuleId]}
          onChoose={onChoose}
          onReset={resetModule}
        />
      )}
    </div>
  )
}
