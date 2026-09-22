const ProjectCaseStudy = ({ project }) => {
  const actions = [
    { label: "Case study", url: project.caseStudyUrl },
    { label: "Website", url: project.liveUrl },
    { label: "Source code", url: project.repositoryUrl },
    { label: "Publication", url: project.publicationUrl },
  ].filter((action) => action.url);

  return (
    <article className="project-entry">
      <h3>{project.title}</h3>
      <p className="entry-role">{project.status}</p>
      <p>{project.summary}</p>
      <div className="link-list">
        {actions.map((action) => (
          <a key={action.label} href={action.url}
            target={action.url.startsWith("http") ? "_blank" : undefined}
            rel={action.url.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={`${action.label}: ${project.title}`}>
            {action.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
