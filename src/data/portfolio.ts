export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Kaggle" | "Twitter" | "Email";
  href: string;
};

export type TechCategory = {
  name: "Machine Learning & AI" | "Libraries & Frameworks" | "Data, Cloud & Software";
  items: string[];
};

export type TimelineItem = {
  organization: string;
  role: string;
  dates: string;
  location: string;
  type: "work" | "education";
  impact: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  objectPosition: string;
  caption: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  instructor?: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  highlights: string[];
  description: string;
  skills: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  coverImage: string;
  featured: boolean;
  problemStatement: string;
  technicalApproach: string;
  results: string[];
  architectureNotes: string[];
  metrics: { label: string; value: string }[];
};

export type Person = {
  name: string;
  firstName: string;
  title: string;
  headline: string;
  location: string;
  phone: string;
  bio: string;
  philosophy: string[];
  photo: string;
  resumeUrl: string;
  availability: {
    open: boolean;
    label: string;
  };
  social: {
    github: string;
    linkedin: string;
    kaggle: string;
    twitter: string;
    email: string;
  };
  socialLinks: SocialLink[];
};

export const person: Person = {
  name: "Prakhar Khedekar",
  firstName: "Prakhar",
  title: "Machine Learning Engineer · AI & Software Developer",
  headline: "Machine Learning Engineer building predictive systems and applied AI products",
  location: "Indore, MP, India",
  phone: "+91 9302927910",
  bio: "Forward-thinking B.Tech CSE (AI & ML) candidate specializing in machine learning, statistical modeling, exploratory data analysis, and automated ML pipelines. I build, tune, and deploy predictive applications — then wrap them so people can actually use them. Seeking an entry-level Machine Learning or AI Engineer role to ship scalable intelligent systems.",
  philosophy: [
    "I want to work as an AI/ML engineer first. Models, data quality, evaluation, and deployment are the craft. Software is the delivery layer — not the headline.",
    "The scientific loop is the job: EDA, feature design, a honest baseline, hyperparameter search that fights overfitting, then a serving path. That is how the Algerian FWI predictor moved from a notebook into Flask on AWS Elastic Beanstalk, and how the Data Science repository became a lab for SVR, SVC, logistic and polynomial regression, and Naïve Bayes with GridSearchCV.",
    "AISE (AI Skill Estimator) is the product expression of that loop: generate assessments with Gemini, score proficiency, speak a mock interview with a local LLM, and turn weaknesses into a study roadmap. I am looking for a team where that kind of applied intelligence is the work.",
  ],
  photo: "/images/profile.jpeg",
  resumeUrl: "/prakhar-khedekar-resume.pdf",
  availability: {
    open: true,
    label: "Open to ML / AI Engineer roles",
  },
  social: {
    github: "https://github.com/coderkhede",
    linkedin: "https://www.linkedin.com/in/prakhar-khedekar-coder",
    kaggle: "https://www.kaggle.com/prakharkhedekar027",
    twitter: "https://x.com/coderkhede",
    email: "prakharkhede027@gmail.com",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/coderkhede" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prakhar-khedekar-coder",
    },
    {
      label: "Kaggle",
      href: "https://www.kaggle.com/prakharkhedekar027",
    },
    { label: "Twitter", href: "https://x.com/coderkhede" },
    { label: "Email", href: "mailto:prakharkhede027@gmail.com" },
  ],
};

export const projects: Project[] = [
  {
    slug: "aise-skill-estimator",
    title: "AISE — AI Skill Estimator",
    tagline:
      "A Streamlit platform that estimates technical proficiency, generates custom tests, and turns gaps into an AI study roadmap.",
    role: "AI Product Engineer · Major Project",
    timeline: "2025",
    techStack: [
      "Python",
      "Streamlit",
      "Gemini API",
      "Ollama",
      "faster-whisper",
      "MySQL",
      "Plotly",
      "VADER",
    ],
    githubUrl: null,
    liveUrl: null,
    coverImage: "/images/projects/aise.png",
    featured: true,
    problemStatement:
      "Learners get generic quizzes and no memory of where they actually fail. Instructors cannot see topic-level strength, and interview practice is disconnected from assessment. AISE (Artificial Intellectual Skill Estimator) needed to process user metrics into automated proficiency reports — then close the loop with a roadmap and a mock interview, not a one-shot score.",
    technicalApproach:
      "I designed a multi-page Streamlit system: authenticated home for subject selection, Gemini-backed question generation with a six-model fallback chain (quota cooldowns, jittered backoff on 5xx), richer submission payloads so analysis names specific topics instead of vague labels, MySQL logging of test sessions, and a roadmap builder that maps weaknesses to weekly steps plus tutorial video recs. Mock interviews run offline via Ollama (llama3.2) with speech (faster-whisper / Vosk) and VADER sentiment so practice works without a cloud dependency.",
    architectureNotes: [
      "Pages: Home → Assessment → Dashboard → Roadmap → Mock Interview → Profile",
      "Gemini generateContent with ordered model fallback and per-model cooldown",
      "analyze_performance() receives topic-level reports, not raw score only",
      "Interview path: Ollama chat + STT + sentiment, independent of Gemini quota",
      "MySQL as the system of record for users, tests, and analysis snapshots",
    ],
    results: [
      "Shipped a major-project AI product: assessment, scoring, visualization, and a personalized learning path in one app.",
      "Made LLM serving resilient — quota and 503 failures degrade to the next Gemini model instead of a dead page.",
      "Separated cloud generation from local interview so practice still runs when APIs throttle.",
    ],
    metrics: [
      { label: "Surface", value: "Streamlit + MySQL" },
      { label: "Generation", value: "6-model Gemini chain" },
      { label: "Interview", value: "Ollama + STT" },
    ],
  },
  {
    slug: "algerian-fwi-predictor",
    title: "Algerian Forest Fire FWI Predictor",
    tagline:
      "End-to-end ML pipeline: EDA, scaling, linear regression, Flask serving, AWS Elastic Beanstalk.",
    role: "Machine Learning Engineer",
    timeline: "2026",
    techStack: [
      "Python",
      "scikit-learn",
      "Linear Regression",
      "Flask",
      "AWS Elastic Beanstalk",
      "Git",
    ],
    githubUrl:
      "https://github.com/coderkhede/Algirean_forest_fire_FWI_predictor",
    liveUrl: null,
    coverImage: "/images/projects/fwi.png",
    featured: true,
    problemStatement:
      "Forest-fire risk is often locked in spreadsheets and delayed reports. Field teams need a numerical Fire Weather Index from temperature, humidity, wind, rain, and Canadian FWI components — without rerunning a notebook. The Algerian forest-fire dataset is well-studied; wrapping it as a deployable predictor is the actual engineering problem.",
    technicalApproach:
      "I ran EDA and feature engineering on the Algerian Forest Fire dataset, scaled inputs, and trained a Scikit-Learn linear regression model on Temperature, RH, wind, rain, FFMC, DMC, and ISI. Artifacts (estimator + StandardScaler) are pickled. A Flask app ingests form inputs, transforms a single observation, and returns the FWI score. Deployment is automated to AWS Elastic Beanstalk with a basic Git-based CI/CD path.",
    architectureNotes: [
      "EDA → feature prep → StandardScaler → LinearRegression → pickle",
      "Flask GET form / POST /predict with locked feature order",
      "Training isolated from serving so inference stays deterministic",
      "Elastic Beanstalk + .ebextensions for environment promotion",
    ],
    results: [
      "Turned a research-style FWI workflow into a two-route web service a non-notebook user can operate.",
      "Separated training from serving: Linear.pkl + scaler.pkl keep scores reproducible.",
      "Practiced the resume loop I want in an ML role: model, tune, deploy, not demo-only notebooks.",
    ],
    metrics: [
      { label: "Pipeline", value: "EDA → train → serve" },
      { label: "Features", value: "7 inputs" },
      { label: "Deploy", value: "AWS Elastic Beanstalk" },
    ],
  },
  {
    slug: "data-science-studio",
    title: "Data Science & ML Course Lab",
    tagline:
      "Open implementations of core algorithms — SVR, SVC, logistic/polynomial regression, Naïve Bayes — with GridSearchCV.",
    role: "ML Practitioner",
    timeline: "2026",
    techStack: [
      "Python",
      "scikit-learn",
      "GridSearchCV",
      "RandomizedSearchCV",
      "Classification",
      "Regression",
    ],
    githubUrl: "https://github.com/coderkhede/Data-Science",
    liveUrl: null,
    coverImage: "/images/projects/data-science.png",
    featured: true,
    problemStatement:
      "Coursework produces scattered experiments. Without a versioned lab, hyperparameter work and model comparisons disappear. I needed a durable place to implement the algorithms I claim on a resume — and to show the search that prevents overfitting, not only a final accuracy.",
    technicalApproach:
      "The Data-Science repository documents implementations of core supervised methods: SVR, SVC, logistic and polynomial regression, and Naïve Bayes. I apply GridSearchCV and RandomizedSearchCV for hyperparameter optimization, keep notebooks as narrative (assumptions, plots, conclusion), and treat baselines as mandatory before claiming a win.",
    architectureNotes: [
      "Notebooks as reproducible units of EDA and model comparison",
      "Classification and regression tracks in one progression repo",
      "GridSearchCV / RandomizedSearchCV as the default tuning path",
    ],
    results: [
      "Built an open lab of the supervised toolkit listed on my resume.",
      "Made overfitting a first-class concern via systematic hyperparameter search.",
      "Created the practice ground that fed production-shaped work like FWI prediction.",
    ],
    metrics: [
      { label: "Focus", value: "Supervised ML" },
      { label: "Tuning", value: "Grid / Random search" },
      { label: "Format", value: "Jupyter lab" },
    ],
  },
  {
    slug: "hotel-management-system",
    title: "Online Hotel Management System",
    tagline:
      "Supporting software work: role-aware Java web app shipped as a Java SDE internship capstone.",
    role: "Java SDE Intern",
    timeline: "May 2024 – June 2024",
    techStack: ["Java", "JSP", "Servlets", "MySQL"],
    githubUrl: "https://github.com/coderkhede/Inten-Project-JRE",
    liveUrl: null,
    coverImage: "/images/projects/hotel.png",
    featured: false,
    problemStatement:
      "The internship brief at Ypsilon was a complete hotel operations system — guests, staff, and administrators — not a single CRUD page. This is supporting evidence of software delivery; the ML work is the career center of gravity.",
    technicalApproach:
      "Classic Java web stack: JSP views, Servlets for control, MySQL as the system of record, role-gated login for user, employee, and administrator. Guests browse availability, book, and pay; admins manage rooms and staff.",
    architectureNotes: [
      "Three-lane auth: User · Employee · Administrator",
      "Booking against MySQL availability",
      "Admin inventory and employee records",
    ],
    results: [
      "Shipped the capstone that closed the Java SDE internship.",
      "Practiced production-shaped Java persistence and role boundaries.",
    ],
    metrics: [
      { label: "Role", value: "Supporting SDE" },
      { label: "Stack", value: "Java + MySQL" },
      { label: "Outcome", value: "Internship shipped" },
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    organization: "Ypsilon IT Solutions Private Limited",
    role: "Data Analyst Intern",
    dates: "May 2025 – June 2025",
    location: "Indore, MP",
    type: "work",
    impact: [
      "Executed data transformation, SQL querying, and business-intelligence dashboards in MS Excel, Power BI, Tableau, and MySQL.",
      "Covered Tacos Sales, Supply Chain, and Service Sector datasets with multi-page reports, drill-through, and executive summary views.",
      "Built a Gym Member Insights view tracking 973+ members across workout type, intensity, BMI/BPM, and fitness condition.",
    ],
  },
  {
    organization: "Ypsilon IT Solutions Private Limited",
    role: "Java SDE Intern",
    dates: "May 2024 – June 2024",
    location: "Indore, MP",
    type: "work",
    impact: [
      "Engineered a full-stack Hotel Management System using Java, Servlets, JSP, and MySQL.",
      "Implemented role-based access control for User, Employee, and Admin.",
    ],
  },
  {
    organization: "IPS Academy, Institute of Engineering and Science",
    role: "B.Tech · Computer Science & Engineering (AI & ML)",
    dates: "2022 — Expected 2026",
    location: "Indore, MP",
    type: "education",
    impact: [
      "CGPA 7.97 / 10.",
      "Specialization in machine learning, statistical modeling, EDA, and applied AI product work (AISE major project).",
      "Public practice under github.com/coderkhede — predictive pipelines, algorithm labs, and internships in data and Java.",
    ],
  },
];

export const techStack: TechCategory[] = [
  {
    name: "Machine Learning & AI",
    items: [
      "Supervised Learning",
      "Linear / Polynomial / Logistic Regression",
      "SVR & SVC",
      "Naïve Bayes",
      "Hyperparameter Tuning",
      "EDA",
      "LLM apps (Gemini, Ollama)",
    ],
  },
  {
    name: "Libraries & Frameworks",
    items: [
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Flask",
      "Streamlit",
      "Seaborn",
      "Matplotlib",
    ],
  },
  {
    name: "Data, Cloud & Software",
    items: [
      "Python",
      "SQL / MySQL",
      "AWS Elastic Beanstalk",
      "Git & GitHub",
      "Power BI",
      "Tableau",
      "MS Excel (Advanced)",
      "Java (supporting)",
    ],
  },
];

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Prakhar Khedekar — full portrait, Indore",
    objectPosition: "center 18%",
    caption: "Portrait · Indore light",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Close crop — expression and eyewear",
    objectPosition: "center 8%",
    caption: "Close study · gaze",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Mid crop — shirt texture and stance",
    objectPosition: "center 35%",
    caption: "Stance · smart casual",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Detail crop — watch and gesture",
    objectPosition: "18% 62%",
    caption: "Detail · left wrist",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Wide environmental crop with vehicle backdrop",
    objectPosition: "70% 40%",
    caption: "Environment · chrome",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Lower crop — denim and posture",
    objectPosition: "center 78%",
    caption: "Line · denim",
  },
];

export const certifications: Certification[] = [
  {
    id: "data-science-bootcamp",
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    instructor: "Krish Naik (KRISHAI Technologies)",
    issueDate: "February 2026",
    credentialId: "UC-139408ab-4e21-430d-90b8-c7a200491515",
    credentialUrl: "https://ude.my/UC-139408ab-4e21-430d-90b8-c7a200491515",
    image: "/certificates/Data_Science_certificate.png",
    highlights: [
      "99 Total Hours",
      "Deep Learning & NLP",
      "Hands-on ML Pipelines",
      "Model Tuning & Serving",
    ],
    description:
      "Comprehensive 99-hour intensive bootcamp mastering the full Data Science and AI lifecycle — ranging from statistical modeling, feature engineering, and exploratory data analysis to machine learning algorithms, deep neural networks (ANN, CNN, RNN), natural language processing, and end-to-end cloud deployment.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Python",
      "EDA",
      "Flask",
      "Model Deployment",
    ],
  },
  {
    id: "python-mastery",
    title: "Python Course for Beginners With Certification: Mastering the Essentials",
    issuer: "Scaler Topics",
    instructor: "Anshuman Singh (Co-founder, Scaler)",
    issueDate: "January 2025",
    image: "/certificates/Python_certificate.png",
    highlights: [
      "121 Video Tutorials",
      "16 Modules",
      "10 Coding Challenges",
      "Problem Solving",
    ],
    description:
      "Rigorous Python engineering certification covering core programming paradigms, object-oriented programming (OOP), algorithm design, data structures, and practical coding problem-solving evaluated across 10 hands-on challenges.",
    skills: [
      "Python",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Software Engineering",
    ],
  },
];

export const site = {
  name: "Prakhar Khedekar",
  description:
    "Portfolio of Prakhar Khedekar (coderkhede) — Machine Learning Engineer and B.Tech CSE (AI/ML) candidate. Predictive pipelines, AISE skill estimation, and applied AI products.",
  url: "https://prakharkhedekar.dev",
  ogImage: "/images/og.png",
};

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
