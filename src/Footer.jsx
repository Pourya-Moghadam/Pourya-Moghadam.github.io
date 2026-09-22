import PageContainer from "./components/layout/PageContainer";
import { profile } from "./content/profile";

const Footer = () => (
  <footer className="site-footer">
    <PageContainer><p>© {new Date().getFullYear()} {profile.name}</p></PageContainer>
  </footer>
);

export default Footer;
