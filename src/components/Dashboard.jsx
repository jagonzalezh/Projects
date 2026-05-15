export default function Dashboard({ modules, progress, reflection, onReflectionChange }) {
  const total = modules.length
  const completed = modules.filter((m) => progress[m.id].completed).length
  const avg = Math.round(
    modules.reduce((acc, m) => acc + (progress[m.id].score / progress[m.id].maxScore) * 100, 0) / total,
  )

  return (
    <section className="panel">
      <h2>Progress Dashboard</h2>
      <div className="stats">
        <div><strong>{completed}/{total}</strong><span>Modules Completed</span></div>
        <div><strong>{avg}%</strong><span>Average Competency</span></div>
      </div>
      <table>
        <thead>
          <tr><th>Module</th><th>Status</th><th>Score</th></tr>
        </thead>
        <tbody>
          {modules.map((m) => (
            <tr key={m.id}>
              <td>{m.title}</td>
              <td>{progress[m.id].completed ? 'Completed' : 'In Progress'}</td>
              <td>{Math.round((progress[m.id].score / progress[m.id].maxScore) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <label className="journal">
        Reflection Journal
        <textarea
          rows="8"
          placeholder="Record clinical observations, self-reflections, and next learning goals..."
          value={reflection}
          onChange={(e) => onReflectionChange(e.target.value)}
        />
      </label>
    </section>
  )
}
