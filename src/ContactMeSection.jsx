import Section from "./components/layout/Section";
import { profile } from "./content/profile";
import { socialLinks } from "./content/socialLinks";

const ContactMeSection = () => {
  const linkedIn = socialLinks.find((link) => link.id === "linkedin");
  return (
    <Section id="contactme-section" ariaLabelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <div className="link-list contact-links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {linkedIn?.url && <a href={linkedIn.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
      </div>
    </Section>
  );
};

export default ContactMeSection;
