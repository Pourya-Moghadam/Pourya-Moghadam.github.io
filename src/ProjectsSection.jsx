import Section from "./components/layout/Section";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, projectsSection } from "./content/projects";
import SectionHeading from "./components/ui/SectionHeading";

const ProjectsSection = () => (
  <Section id="projects-section" ariaLabelledby="projects-title">
    <SectionHeading id="projects-title" title={projectsSection.title} />
    <div className="entry-list">
      {projects.filter((project) => project.featured).map((project) => (
        <ProjectCaseStudy key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
