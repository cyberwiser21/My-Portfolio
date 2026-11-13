export const personalInfo = {
  name: "Tejas Patil",
  shortName: "Tejas",
  role: "IT Engineering Student | Aspiring Software Developer | Machine Learning Enthusiast",
  headline: "IT Engineering Student & Aspiring Software Developer",
  tagline: "Building practical digital solutions through code, creativity and continuous learning.",
  location: "India",
  email: "tejaspatil1845@gmail.com",
  github: "https://github.com/cyberwiser21",
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
    role: "Academic Researcher & Deep Learning Developer",
    timeline: "Academic Semester Exploration",
    shortDescription: "Developed an academic machine learning project using a ResNet50-based deep learning architecture to classify ECG heartbeat categories from the MIT-BIH Arrhythmia dataset.",
    detailedDescription: "Explored deep learning applications in biomedical signal analysis by implementing a ResNet50 convolutional neural network architecture. The model was trained and evaluated on ECG heartbeat records from the benchmark MIT-BIH Arrhythmia dataset to classify distinct heartbeat categories. (Note: Developed strictly as an academic exploration project, not as a clinically validated diagnostic system.)",
    problem: "Manual interpretation of Electrocardiogram (ECG) heartbeat recordings is time-consuming and requires specialized cardiological expertise. Detecting subtle irregular heartbeats (arrhythmias) through automated neural architectures presents an interesting academic challenge due to signal noise, baseline wander, and patient-specific waveform variance in biomedical datasets.",
    tools: ["Python", "TensorFlow", "Keras", "ResNet50", "NumPy", "Matplotlib", "PhysioNet WFDB"],
    technologies: ["Python", "TensorFlow", "ResNet50", "Deep Learning"],
    process: [
      {
        step: "Dataset Ingestion & Extraction",
        detail: "Utilized records from the benchmark MIT-BIH Arrhythmia dataset containing annotated two-channel ambulatory ECG signal leads."
      },
      {
        step: "Signal Denoising & Heartbeat Segmentation",
        detail: "Preprocessed electrical signal waveforms to mitigate high-frequency noise and baseline wander, segmenting continuous recording leads into individual heartbeat windows centered around R-peaks."
      },
      {
        step: "Residual Architecture Adaptation",
        detail: "Adapted the deep residual network architecture (ResNet50) for signal representations, leveraging identity shortcut connections to maintain gradient flow across deep convolutional layers."
      },
      {
        step: "Model Training & Evaluation",
        detail: "Trained across heartbeat categories using categorical cross-entropy loss, Adam optimization, and validation partitions to track classification accuracy."
      }
    ],
    results: "The trained ResNet50 model successfully achieved stable loss convergence on the MIT-BIH heartbeat dataset, illustrating the feasibility of residual neural networks for automated waveform feature extraction. (Important note: This was developed purely as an academic exploration into neural network architectures for signal processing, and is not a clinically validated or certified medical diagnostic tool.)",
    githubUrl: "https://github.com/cyberwiser21/ECG",
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
    role: "Machine Learning Developer & Data Analyst",
    timeline: "Research & Exploration Project",
    shortDescription: "Developed an experimental machine learning model to predict post-meal blood glucose levels using patient-related, medication-related, and nutritional features.",
    detailedDescription: "An experimental regression project designed to forecast post-meal glycemic response. Analyzed multidimensional feature sets including nutritional intake, medication records, and individual patient parameters to train and compare predictive algorithms including Random Forest, Gradient Boosting, and Support Vector Regression.",
    problem: "Postprandial (post-meal) blood glucose levels fluctuate dynamically based on complex interactions between dietary macronutrients, physical activity, medication timing, and individual metabolic parameters. The objective was to investigate whether classical supervised regression models could predict glycemic peaks from multi-factorial tabular inputs.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    process: [
      {
        step: "Data Collation & Cleansing",
        detail: "Synthesized tabular patient records encompassing nutritional macronutrient values (carbohydrates, fats, proteins), medication/insulin dosage timestamps, and biometric features."
      },
      {
        step: "Feature Engineering & Correlation",
        detail: "Computed rolling averages, temporal lag features between meal intake and glucose measurement, and normalized numeric variables using standard scaling."
      },
      {
        step: "Model Benchmarking",
        detail: "Trained and evaluated multiple regression algorithms including Random Forest Regressor, Gradient Boosting Regressor, and Support Vector Regression (SVR)."
      },
      {
        step: "Hyperparameter Optimization",
        detail: "Tuned tree depths, estimator counts, and regularization parameters using k-fold cross-validation to minimize Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE)."
      }
    ],
    results: "Ensemble tree-based algorithms (Random Forest and Gradient Boosting) demonstrated superior predictive stability over single models by capturing non-linear feature interactions between meal macronutrients and time-lag factors, yielding consistent evaluation metrics across test partitions.",
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
    role: "Security & Full-Stack Developer",
    timeline: "Academic Cybersecurity Project",
    shortDescription: "Developed an academic cybersecurity project concept for checking email domain authentication by validating SPF, DKIM, and DMARC records.",
    detailedDescription: "An academic cybersecurity tool created to analyze email domain authentication health. The application evaluates DNS configurations to verify whether Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication (DMARC) records are properly configured to prevent domain impersonation.",
    problem: "Email spoofing and unauthorized domain impersonation remain leading vectors for phishing attacks. Many domain administrators fail to configure critical DNS security protocols properly, leaving their domain reputation susceptible to forgery.",
    tools: ["Python", "Flask", "dnspython", "HTML5", "CSS3", "DNS Query Tools"],
    technologies: ["Python", "Flask", "DNS", "HTML", "CSS"],
    process: [
      {
        step: "Protocol Analysis",
        detail: "Researched email authentication standards: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication, Reporting, and Conformance)."
      },
      {
        step: "DNS Query Engine",
        detail: "Implemented a Python script utilizing dnspython to query target domain nameservers for TXT and DMARC policy records."
      },
      {
        step: "Policy Parser & Scoring",
        detail: "Engineered a parser to evaluate whether DMARC policy flags are set to 'none', 'quarantine', or 'reject', providing risk insights based on policy enforcement."
      },
      {
        step: "Web Interface Development",
        detail: "Built a clean, responsive Flask web application allowing users to input any domain name and receive a structured authentication scorecard in real time."
      }
    ],
    results: "The tool reliably queries and identifies missing or misconfigured SPF and DMARC records across specified domains, outputting actionable configuration recommendations to prevent fraudulent sender spoofing.",
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

export const testimonials = [
  {
    id: 1,
    quote: "Tejas demonstrated great commitment during our coursework project. His understanding of Python and ability to adapt deep learning architectures like ResNet50 for signal classification was impressive.",
    author: "Academic Project Partner",
    role: "IT Engineering Peer",
    project: "ECG Arrhythmia Classification"
  },
  {
    id: 2,
    quote: "Working with Tejas on software assignments is always smooth. He writes clean, structured code, is very receptive to feedback, and always stays curious about better implementation methods.",
    author: "Student Collaborator",
    role: "Computer Engineering Student",
    project: "Web & Database Systems"
  },
  {
    id: 3,
    quote: "Tejas has a natural knack for breaking down problems and learning tools rapidly—from frontend UI components to machine learning libraries. A dependable and enthusiastic team contributor.",
    author: "Hackathon Teammate",
    role: "Full-Stack Project Partner",
    project: "Interactive Prototypes"
  }
];

export const blogNotes = [
  {
    id: "resnet50-biomedical-signals",
    title: "Understanding ResNet50 for Biomedical Signal Classification",
    date: "Academic Note",
    readTime: "4 min read",
    category: "Deep Learning",
    summary: "How skip connections and residual learning help deep neural networks converge on 1D/2D ECG heartbeat representations without degradation.",
    tags: ["ResNet50", "Deep Learning", "Signal Processing"]
  },
  {
    id: "email-domain-security-dns",
    title: "Email Domain Security 101: Understanding SPF, DKIM & DMARC",
    date: "Security Note",
    readTime: "3 min read",
    category: "Cybersecurity",
    summary: "A practical guide to DNS record verification and why combining all three authentication protocols is crucial to prevent domain forgery.",
    tags: ["Cybersecurity", "DNS", "Web Security"]
  },
  {
    id: "tabular-regression-scikit-learn",
    title: "Practical Regression with Scikit-learn: Lessons from Glycemic Modeling",
    date: "Data Science Note",
    readTime: "5 min read",
    category: "Machine Learning",
    summary: "Reflections on feature engineering, standard scaling, and why ensemble models like Random Forest outperformed linear baselines in my project.",
    tags: ["Scikit-learn", "Python", "Regression"]
  }
];
