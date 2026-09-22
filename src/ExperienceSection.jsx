import Section from "./components/layout/Section";
import SectionHeading from "./components/ui/SectionHeading";
import { experience, experienceSection } from "./content/experience";
import { teaching } from "./content/teaching";

const ExperienceSection = () => {
  const technicalTeaching = teaching[0];
  return (
    <Section id="experience-section" ariaLabelledby="experience-title">
      <SectionHeading id="experience-title" title={experienceSection.title} />
      <div className="entry-list">
        {experience.filter((role) => role.featured).map((item) => (
          <article key={item.id} className="experience-entry">
            <div className="entry-heading">
              <h3>{item.organization}</h3>
              <p className="entry-date">{item.startDate} – {item.endDate}</p>
            </div>
            <p className="entry-role">{item.role}</p>
            <p>{item.summary}</p>
          </article>
        ))}
        <article className="experience-entry">
          <div className="entry-heading">
            <h3>{technicalTeaching.institution}</h3>
            <p className="entry-date">{technicalTeaching.period}</p>
          </div>
          <p className="entry-role">{technicalTeaching.role}</p>
          <p>Supported teaching in software engineering, algorithms, artificial intelligence, and data analytics.</p>
          <details className="teaching-details">
            <summary>Courses</summary>
            <ul>
              {technicalTeaching.courses.filter((course) => course.featured).map((course) => (
                <li key={course.id}>{course.title}</li>
              ))}
            </ul>
          </details>
        </article>
      </div>
    </Section>
  );
};

export default ExperienceSection;
