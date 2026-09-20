function ProjectCard({ project }) {
  if (!project) return null

  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-card__links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noreferrer">
            Source Code
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard