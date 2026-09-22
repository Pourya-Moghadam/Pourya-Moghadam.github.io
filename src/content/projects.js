export const projectsSection = {
  title: "Projects",
};

export const projects = [
  {
    id: "edgefusion-act",
    title: "Privacy-Preserving Multimodal Activity Recognition",
    status: "Completed doctoral research",
    category: "Multimodal ML · Edge AI",
    positioning: "Non-visual multimodal AI for smart-home activity recognition",
    summary:
      "A multimodal machine learning system that combines mmWave radar and electricity signals to recognize Activities of Daily Living without continuous video recording.",
    engineeringSummary:
      "Built a pipeline from multimodal dataset creation to temporal encoding and sensor fusion, with evaluation across scripted, cross-subject, and free-living settings. The work explored lightweight temporal models and quantization to balance recognition quality with the constraints of privacy-conscious edge inference.",
    image: "/thesis-figures/e2r-fusenet-architecture.webp",
    imageAlt: "E2R-FuseNet architecture connecting radar and electricity encoders through cross-modal fusion",
    imageWidth: 1800,
    imageHeight: 874,
    highlights: [
      "Radar and electricity sensor fusion",
      "Cross-modal and event-aware attention",
      "Lightweight temporal modeling and quantization",
      "Evaluation across scripted, cross-subject, and free-living settings",
    ],
    architecture: ["mmWave radar", "Electricity signals", "Temporal encoders", "Cross-modal fusion", "Activity recognition"],
    evidence: [
      { label: "Protocol", value: "Scripted · cross-subject · free-living" },
      { label: "Privacy", value: "Non-visual sensing in place of continuous video" },
      { label: "Efficiency", value: "Lightweight temporal modeling · quantization" },
    ],
    technologyGroups: [
      {
        label: "Machine Learning",
        items: ["Python", "PyTorch", "Transformers", "Temporal CNNs", "Multimodal Learning"],
      },
      {
        label: "Sensing",
        items: ["mmWave Radar", "NILM"],
      },
      {
        label: "Deployment-oriented",
        items: ["Edge AI"],
      },
    ],
    repositoryUrl: "",
    liveUrl: "",
    caseStudyUrl: "#/phd-research",
    publicationUrl: "",
    featured: true,
    details: {},
  },
  {
    id: "nilm-analyzer",
    title: "NILM Analyzer",
    positioning: "",
    summary:
      "A modular NILM toolkit with harmonized datasets, PyTorch models, and realtime energy disaggregation dashboards.",
    image: "",
    imageAlt: "NILM Analyzer project interface",
    imageWidth: 1200,
    imageHeight: 800,
    highlights: [],
    technologyGroups: [],
    repositoryUrl: "",
    liveUrl: "",
    caseStudyUrl: "",
    publicationUrl: "",
    featured: false,
    details: {},
  },
  {
    id: "groqflow",
    title: "GroqFlow",
    positioning: "",
    summary:
      "A real-time AI chatbot platform powered by Groq LLMs, featuring streaming responses, conversation persistence, and a ChatGPT-style UI.",
    image: "",
    imageAlt: "GroqFlow chatbot application interface",
    imageWidth: 1200,
    imageHeight: 800,
    highlights: [],
    technologyGroups: [],
    repositoryUrl: "",
    liveUrl: "https://pourya-moghadam74.github.io/chatbot/",
    caseStudyUrl: "",
    publicationUrl: "",
    featured: false,
    details: {},
  },
];
