import Section from "./components/layout/Section";
import { profile } from "./content/profile";
import { socialLinks } from "./content/socialLinks";

const labels = { github: "GitHub", linkedin: "LinkedIn", "google-scholar": "Google Scholar", email: "Email" };

const LandingSection = () => (
  <Section id="landing-section" ariaLabelledby="hero-title" className="intro-section">
    <div className="intro-heading">
      <div>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="intro-role">Software Engineer · {profile.location}</p>
      </div>
      <img src={profile.image} alt={profile.imageAlt} width="80" height="80" />
    </div>
    <h2 className="about-heading">About</h2>
    <p>{profile.biography}</p>
    <div className="link-list" aria-label="Professional profiles">
      {socialLinks.map((link) => (
        <a key={link.id} href={link.url}
          target={link.id === "email" ? undefined : "_blank"}
          rel={link.id === "email" ? undefined : "noopener noreferrer"}>
          {labels[link.id] || link.label}
        </a>
      ))}
    </div>
  </Section>
);

export default LandingSection;
