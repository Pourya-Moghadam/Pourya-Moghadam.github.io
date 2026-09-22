import { useEffect, useState } from "react";
import useTheme from "./hooks/useTheme";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import ExperienceSection from "./ExperienceSection";
import ResearchSection from "./ResearchSection";
import ThesisProjectPage from "./ThesisProjectPage";

const useHashRoute = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
};

function App() {
  const hash = useHashRoute();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const isThesisProject = hash === "#/phd-research" || hash.startsWith("#/phd-research/");
    document.title = isThesisProject
      ? "Doctoral Research — Pourya Moghadam"
      : "Pourya Moghadam — Software Engineer";
    const targetId = isThesisProject ? hash.split("/")[2] : hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      const target = targetId && document.getElementById(targetId);
      if (target) target.scrollIntoView();
      else if (isThesisProject) window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  if (hash === "#/phd-research" || hash.startsWith("#/phd-research/")) return <ThesisProjectPage theme={theme} onToggleTheme={toggleTheme} />;

  return (
      <div className="portfolio">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main id="main-content" >
          <LandingSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <ContactMeSection />
        </main>
        <Footer />
      </div>
  )
}

export default App;
