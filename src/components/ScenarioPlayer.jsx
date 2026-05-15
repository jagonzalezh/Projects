import { useMemo } from 'react'

export default function ScenarioPlayer({ module, status, onChoose, onReset }) {
  const currentStep = module.scenario.steps[status.currentStep]
  const completed = status.currentStep >= module.scenario.steps.length
  const competency = useMemo(() => Math.round((status.score / status.maxScore) * 100), [status])

  return (
    <section className="panel">
      <h2>{module.title}</h2>
      <p className="client-case"><strong>Client scenario:</strong> {module.scenario.client}</p>

      {completed ? (
        <div className="completion">
          <h3>Module Complete</h3>
          <p>Competency score: <strong>{competency}%</strong> ({status.score}/{status.maxScore})</p>
          <button onClick={onReset}>Retake Module</button>
        </div>
      ) : (
        <div className="step">
          <h3>Decision {status.currentStep + 1}</h3>
          <p>{currentStep.prompt}</p>
          <div className="choice-grid">
            {currentStep.choices.map((choice, idx) => (
              <button key={idx} onClick={() => onChoose(choice)}>{choice.text}</button>
            ))}
          </div>
          {status.lastFeedback && (
            <div className="feedback">
              <p><strong>Client reaction:</strong> {status.lastReaction}</p>
              <p><strong>Feedback:</strong> {status.lastFeedback}</p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
