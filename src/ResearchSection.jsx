import Section from "./components/layout/Section";
import SectionHeading from "./components/ui/SectionHeading";
import { researchSection } from "./content/research";
import { publications } from "./content/publications";
import { socialLinks } from "./content/socialLinks";

const ResearchSection = () => {
  const googleScholar = socialLinks.find((link) => link.id === "google-scholar");
  return (
    <Section id="research-section" ariaLabelledby="research-title">
      <SectionHeading id="research-title" title={researchSection.title} />
      <ul className="publication-list">
        {publications.filter((publication) => publication.featured).map((publication) => (
          <li key={publication.id}>
            <article>
              <h3>{publication.title}</h3>
              <p className="publication-meta">{[publication.venue, publication.year].filter(Boolean).join(" · ")}</p>
              <p className="publication-meta">{publication.authors.join(", ")}</p>
              <div className="link-list publication-links">
                {[
                  { label: "Publication", url: publication.publicationUrl },
                  { label: "PDF", url: publication.pdfUrl },
                  { label: "GitHub", url: publication.githubUrl },
                ].filter((action) => action.url).map((action) => (
                  <a key={action.label} href={action.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`${action.label}: ${publication.title}`}>
                    {action.label}
                  </a>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
      {googleScholar?.url && (
        <div className="link-list">
          <a href={googleScholar.url} target="_blank" rel="noopener noreferrer">Google Scholar</a>
        </div>
      )}
    </Section>
  );
};

export default ResearchSection;
