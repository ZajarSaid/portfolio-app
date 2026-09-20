const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Django', 'Django REST Framework'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'React Router'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <h2 className="section__heading">Skills</h2>
        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3 className="skills__group-title">{group.title}</h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li className="skills__badge" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills