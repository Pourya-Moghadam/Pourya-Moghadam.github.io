import ThemeToggle from "./components/ui/ThemeToggle";
import PageContainer from "./components/layout/PageContainer";

const navigation = [
  { label: "About", href: "#landing-section" },
  { label: "Experience", href: "#experience-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Publications", href: "#research-section" },
  { label: "Contact", href: "#contactme-section" },
];

const Header = ({ theme, onToggleTheme }) => (
  <header className="site-header">
    <PageContainer className="header-row">
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </PageContainer>
  </header>
);

export default Header;
