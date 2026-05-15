export default function ModuleCard({ module, status, onOpen }) {
  return (
    <button className="module-card" onClick={() => onOpen(module.id)}>
      <div className="module-header">
        <h3>{module.title}</h3>
        <span className={`pill ${status.completed ? 'done' : 'todo'}`}>
          {status.completed ? 'Completed' : 'In Progress'}
        </span>
      </div>
      <p>{module.description}</p>
      <div className="module-footer">
        <span>Score: {status.score}/{status.maxScore}</span>
        <span>Open Module →</span>
      </div>
    </button>
  )
}
