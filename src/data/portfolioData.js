export const personalInfo = {
  name: "Tejas Patil",
  shortName: "Tejas",
  role: "IT Engineering Student | Aspiring Software Developer | Machine Learning Enthusiast",
  headline: "IT Engineering Student & Aspiring Software Developer",
  tagline: "Building practical digital solutions through code, creativity and continuous learning.",
  location: "India",
  email: "tejaspatil1845@gmail.com",
  github: "https://github.com/cybewiser21",
  linkedin: "https://www.linkedin.com/in/tejas-patil-542032326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  statusBadge: "Open to Internships & Projects"
};

export const aboutMe = {
  intro: [
    "I am an Information Technology engineering student passionate about software development, Artificial Intelligence, Machine Learning, and problem-solving.",
    "I genuinely enjoy building practical projects, experimenting with emerging technologies, and continuously pushing myself to level up my technical capabilities. My approach is grounded in curiosity, attention to detail, and creating reliable, well-structured digital solutions.",
    "Currently, I am looking for internship opportunities and beginner-friendly freelance projects where I can contribute actively, solve meaningful problems, and continue learning alongside experienced engineers."
  ],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
      institution: "Engineering College / University",
      location: "India",
      status: "Undergraduate Student (In Progress)",
      highlights: "Core coursework in Data Structures, Database Management Systems, Software Engineering, and Machine Learning fundamentals."
    }
  ],
  philosophy: [
    {
      title: "Practical Problem Solving",
      desc: "Focusing on writing clean code that solves real problems efficiently and reliably."
    },
    {
      title: "Continuous Learning",
      desc: "Actively studying modern tools, reading technical documentation, and building hands-on projects."
    },
    {
      title: "Transparent & Honest",
      desc: "Clear about my current skill level and enthusiastic about learning what I don't know yet."
    }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Core languages used for problem-solving, algorithms, and logic.",
    skills: ["Python", "JavaScript", "SQL"]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, user-friendly, and accessible interfaces.",
    skills: ["HTML", "CSS", "React.js"]
  },
  {
    category: "Machine Learning & AI",
    description: "Exploring deep learning architectures and predictive modeling.",
    skills: ["Machine Learning", "Deep Learning", "ResNet50", "Scikit-learn"]
  },
  {
    category: "Databases & Tools",
    description: "Data storage, version control, and development environments.",
    skills: ["MySQL", "Git", "GitHub", "VS Code", "Streamlit"]
  }
];

export const projects = [
  {
    id: "ecg-arrhythmia-classification",
    title: "ECG-Based Arrhythmia Classification",
    badge: "Deep Learning / Academic",
    category: "Machine Learning & AI",
    shortDescription: "Developed an academic machine learning project using a ResNet50-based deep learning architecture to classify ECG heartbeat categories from the MIT-BIH Arrhythmia dataset.",
    detailedDescription: "Explored deep learning applications in biomedical signal analysis by implementing a ResNet50 convolutional neural network architecture. The model was trained and evaluated on ECG heartbeat records from the benchmark MIT-BIH Arrhythmia dataset to classify distinct heartbeat categories. (Note: Developed strictly as an academic exploration project, not as a clinically validated diagnostic system.)",
    technologies: ["Python", "TensorFlow", "ResNet50", "Deep Learning"],
    githubUrl: "https://github.com/cybewiser21/ECG",
    liveUrl: null,
    featured: true,
    highlights: [
      "Trained on the benchmark MIT-BIH Arrhythmia dataset",
      "Leveraged ResNet50 deep residual learning architecture",
      "Explored multi-category ECG heartbeat classification"
    ]
  },
  {
    id: "post-meal-blood-glucose-prediction",
    title: "Post-Meal Blood Glucose Prediction",
    badge: "Machine Learning / Regression",
    category: "Machine Learning & AI",
    shortDescription: "Developed an experimental machine learning model to predict post-meal blood glucose levels using patient-related, medication-related, and nutritional features.",
    detailedDescription: "An experimental regression project designed to forecast post-meal glycemic response. Analyzed multidimensional feature sets including nutritional intake, medication records, and individual patient parameters to train and compare predictive algorithms including Random Forest, Gradient Boosting, and Support Vector Regression.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlights: [
      "Explored Random Forest, Gradient Boosting, and Support Vector Regression (SVR)",
      "Processed patient, dietary, and medication feature correlations",
      "Compared regression metrics for predictive consistency"
    ]
  },
  {
    id: "email-spoofing-checker",
    title: "Email Spoofing Checker",
    badge: "Cybersecurity & Web",
    category: "Cybersecurity & Web",
    shortDescription: "Developed an academic cybersecurity project concept for checking email domain authentication by validating SPF, DKIM, and DMARC records.",
    detailedDescription: "An academic cybersecurity tool created to analyze email domain authentication health. The application evaluates DNS configurations to verify whether Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication (DMARC) records are properly configured to prevent domain impersonation.",
    technologies: ["Python", "Flask", "DNS", "HTML", "CSS"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    highlights: [
      "Evaluates domain SPF, DKIM, and DMARC authentication protocols",
      "DNS record queries and security policy validation",
      "Lightweight web application built with Python Flask and clean frontend"
    ]
  }
];

export const services = [
  {
    id: "python-automation",
    title: "Basic Python Programming & Automation",
    description: "Developing custom automation scripts, file batch processing, web scraping tasks, and data manipulation utilities to automate repetitive workflows.",
    skills: ["Python", "Scripting", "Automation"],
    suitableFor: "Small automation tasks, batch file processing, scripting"
  },
  {
    id: "sql-databases",
    title: "SQL Queries & Database Tasks",
    description: "Writing and optimizing SQL queries, creating relational database schemas, filtering dataset records, and managing MySQL database tables.",
    skills: ["SQL", "MySQL", "Database Design"],
    suitableFor: "Query creation, database restructuring, basic data retrieval"
  },
  {
    id: "frontend-react",
    title: "Simple React & Frontend Development",
    description: "Building clean, mobile-responsive user interfaces, interactive landing pages, and component-based frontend web pages using React.js, HTML, and CSS.",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript"],
    suitableFor: "Personal sites, portfolio pages, responsive UI components"
  },
  {
    id: "streamlit-dashboards",
    title: "Streamlit Dashboard Development",
    description: "Building interactive, clean web dashboards and rapid application prototypes for machine learning demos and data exploration using Python and Streamlit.",
    skills: ["Streamlit", "Python", "Data Visualization"],
    suitableFor: "ML model showcases, exploratory data dashboards, prototypes"
  },
  {
    id: "docs-formatting",
    title: "PowerPoint & Technical Documentation Formatting",
    description: "Formatting technical reports, student project documentation, project summaries, and creating clean, professional PowerPoint slide presentations.",
    skills: ["Technical Writing", "PowerPoint", "Documentation"],
    suitableFor: "Academic project presentations, structured reports, slides"
  }
];

