import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <h2 className="section__heading">Projects</h2>
        <p className="section__subtitle">A selection of my main projects.</p>
        {projects.length > 0 && (
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects