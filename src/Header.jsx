import PageContainer from "./components/layout/PageContainer";

const navigation = [
  { label: "About", href: "#landing-section" },
  { label: "Experience", href: "#experience-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Publications", href: "#research-section" },
  { label: "Contact", href: "#contactme-section" },
];

const Header = () => (
  <header className="site-header">
    <PageContainer>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </PageContainer>
  </header>
);

export default Header;
