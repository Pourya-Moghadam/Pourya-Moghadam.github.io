import PageContainer from "./components/layout/PageContainer";
import { profile } from "./content/profile";

const contributions = [
  {
    number: "01",
    title: "EFACT",
    label: "RGB-D reference model",
    description:
      "A lightweight RGB-D architecture that uses cross-modal attention and temporal modeling for fine-grained activity recognition. Quantization-aware optimization was evaluated for use as a reference model.",
  },
  {
    number: "02",
    title: "EdgeTCNformer",
    label: "Electricity as activity context",
    description:
      "A temporal-convolution and Transformer model that estimates appliance-level electricity usage from aggregate smart-meter signals. Its multi-task, edge-oriented design turns energy consumption into contextual evidence about daily activity.",
  },
  {
    number: "03",
    title: "HomeSense-ADL",
    label: "Multimodal smart-home dataset",
    description:
      "A synchronized dataset spanning mmWave radar, electricity consumption, RGB video, and depth imagery. Scripted activities and free-living behavior provide a common benchmark for studying accuracy, privacy, and generalization.",
  },
  {
    number: "04",
    title: "Radar representation learning",
    label: "Non-visual motion understanding",
    description:
      "Structural locality and spatial sensor-awareness improve representation learning from sparse radar point clouds. Radar captures motion without recording identifiable visual imagery inside the home.",
  },
  {
    number: "05",
    title: "E2R-FuseNet",
    label: "Asymmetric multimodal fusion",
    description:
      "The thesis’s primary system combines radar motion with appliance-use context through cross-modal attention, reliability-aware fusion, and feature-wise modulation. It removes the need for continuous video during inference while retaining a deployment-oriented architecture.",
  },
];

const figureDimensions = {
  "/thesis-figures/edgetcnformer-architecture.webp": [
    1800,
    525
  ],
  "/thesis-figures/homelab-layout.webp": [
    1800,
    642
  ],
  "/thesis-figures/efact-architecture.webp": [
    1800,
    1241
  ],
  "/thesis-figures/adl-taxonomy.webp": [
    1400,
    933
  ],
  "/thesis-figures/e2r-fusenet-architecture.webp": [
    1800,
    874
  ]
};

const ThesisFigure = ({ src, alt, caption }) => (
  <figure className="thesis-figure">
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size figure: ${alt}`}>
      <img src={src} alt={alt} width={figureDimensions[src][0]} height={figureDimensions[src][1]} loading="lazy" />
    </a>
    <figcaption>
      <span>{caption}</span>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Full-size figure: ${alt}`}>Full-size image</a>
    </figcaption>
  </figure>
);

const sections = [
  { id: "motivation", label: "Motivation" },
  { id: "environment", label: "Research environment" },
  { id: "contributions", label: "Contributions" },
  { id: "reference-systems", label: "Reference systems" },
  { id: "primary-system", label: "E2R-FuseNet" },
];

const ThesisProjectPage = () => (
  <div className="thesis-page">
    <a href="#/phd-research/thesis-main" className="skip-link">Skip to project content</a>
    <header className="site-header">
      <PageContainer><a className="back-link" href="#projects-section">Back to portfolio</a></PageContainer>
    </header>
    <PageContainer>
      <main id="thesis-main">
        <div className="thesis-intro">
          <h1>Privacy-preserving multimodal activity recognition</h1>
          <p className="entry-role">Doctoral research · University of Toronto · 2026</p>
          <p>A machine learning pipeline that combines mmWave radar and electricity signals to recognize activities of daily living in smart homes without continuous video recording.</p>
        </div>
        <nav className="thesis-navigation" aria-label="Case study sections">
          {sections.map((section) => (
            <a key={section.id} href={`#/phd-research/${section.id}`} onClick={() => {
              if (window.location.hash === `#/phd-research/${section.id}`) {
                document.getElementById(section.id)?.scrollIntoView();
              }
            }}>{section.label}</a>
          ))}
        </nav>
        <section id="motivation" className="thesis-section">
          <h2>Motivation</h2>
          <p>Long-term monitoring of activities of daily living can help track changes in functional ability. Cameras raise privacy concerns, wearables depend on consistent use, and individual ambient sensors can lack context.</p>
          <p>This research combines complementary sensing modalities and evaluates recognition accuracy, privacy, and computational efficiency.</p>
          <ThesisFigure src="/thesis-figures/adl-taxonomy.webp" alt="Taxonomy comparing ambient, wearable, and fusion-based activity monitoring systems" caption="Ambient, wearable, and fusion-based approaches to activity monitoring." />
        </section>
        <section id="environment" className="thesis-section">
          <h2>Research environment</h2>
          <p>HomeSense-ADL synchronizes radar, electricity, RGB video, and depth data. It includes scripted activities and free-living behavior for evaluating different sensing methods.</p>
          <ThesisFigure src="/thesis-figures/homelab-layout.webp" alt="HomeLab rooms and sensing coverage used for multimodal activity data collection" caption="HomeLab sensing layout used to collect the HomeSense-ADL dataset." />
        </section>
        <section id="contributions" className="thesis-section">
          <h2>Contributions</h2>
          <ul className="contribution-list">
            {contributions.map((item) => (
              <li key={item.number}>
                <h3>{item.title}</h3>
                <p className="entry-role">{item.label}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="reference-systems" className="thesis-section">
          <h2>Reference systems</h2>
          <p>EFACT provides an RGB-D reference architecture. EdgeTCNformer extracts appliance-level context from aggregate electricity measurements.</p>
          <ThesisFigure src="/thesis-figures/efact-architecture.webp" alt="EFACT cross-modal RGB-D activity recognition architecture" caption="EFACT: cross-modal RGB-D temporal architecture." />
          <ThesisFigure src="/thesis-figures/edgetcnformer-architecture.webp" alt="EdgeTCNformer non-intrusive load monitoring architecture" caption="EdgeTCNformer: appliance-level context from aggregate electricity." />
        </section>
        <section id="primary-system" className="thesis-section">
          <h2>E2R-FuseNet</h2>
          <p>E2R-FuseNet combines motion information from mmWave radar with appliance-use context from electricity signals. It uses cross-modal attention, reliability-aware fusion, and feature-wise modulation.</p>
          <p>The inference pipeline does not require continuous video recording. The research also examines lightweight temporal models and quantization for edge inference.</p>
          <ThesisFigure src="/thesis-figures/e2r-fusenet-architecture.webp" alt="E2R-FuseNet architecture combining radar and electricity signals" caption="E2R-FuseNet: fusion of radar motion and electricity context." />
        </section>
      </main>
      <footer className="thesis-footer link-list">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href="#projects-section">Back to projects</a>
      </footer>
    </PageContainer>
  </div>
);

export default ThesisProjectPage;
