export const HERO_COPY = {
  tagline: "Machine Learning Engineer & Data Science Professional",
  description:
    "Machine Learning Engineer with experience spanning from junior analyst roles to advanced ML engineering. Skilled in Python, SQL, and deep learning, with proven success in delivering scalable ML solutions, deploying APIs, and presenting insights to stakeholders. Strong foundation in data analytics and business intelligence enabling effective end-to-end AI solutions.",
  ctas: [
    { label: "Start a Project", href: "#contact", variant: "default" as const },
    { label: "View Case Studies", href: "#projects", variant: "outline" as const },
    { label: "See Pricing", href: "#engagement", variant: "ghost" as const },
  ],
}

export const ABOUT_COPY = {
  title: "BS Computer Science · Machine Learning Engineer · Data Scientist",
  content: [
    "I graduated with a BS in Computer Science from Sukkur IBA University (2019-2022) and currently work as a Machine Learning Engineer at Invisible Technologies Inc.",
    "My craft blends production ML pipelines, SQL-first analytics, and clean data workflows that scale. From model experimentation to dashboard delivery, I help teams ship value, faster. I've deployed customer churn prediction models, built ETL pipelines processing 10M+ rows, and created ML solutions that drive real business impact.",
  ],
  stats: [
    { label: "Projects Delivered", value: "28+" },
    { label: "ML Models Deployed", value: "16+" },
    { label: "Years Experience", value: "4+" },
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "Sukkur IBA University",
    timeline: "Sep 2020 — Apr 2024",
  },
}

export const SKILL_CATEGORIES = [
  {
    title: "Programming & Tools",
    items: ["Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)", "SQL", "Git"],
  },
  {
    title: "Machine Learning",
    items: [
      "Supervised/Unsupervised Learning",
      "Regression & Classification",
      "Clustering",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Deep Learning",
    items: ["Neural Networks", "CNNs", "RNNs", "Transformers", "Transfer Learning"],
  },
  {
    title: "Data & Analytics",
    items: [
      "Power BI",
      "ETL Pipelines",
      "Data Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
    ],
  },
  {
    title: "Development & Deployment",
    items: ["Flask API", "Model Deployment", "Streamlit", "TypeScript", "Next.js"],
  },
]

export const EXPERIENCES = [
  {
    title: "Machine Learning Engineer",
    company: "Invisible Technologies Inc",
    location: "Remote",
    timeline: "June 2025 — Present",
    description:
      "Leading ML initiatives to deliver production-ready models and scalable data pipelines for enterprise clients.",
    bullets: [
      "Designed and deployed customer churn prediction model, improving retention by 15%.",
      "Built ETL pipelines for large datasets (10M+ rows), reducing data processing time by 40%.",
      "Automated feature engineering and model training pipelines, boosting team productivity.",
    ],
  },
  {
    title: "Junior ML Engineer",
    company: "Turing.com",
    location: "Remote",
    timeline: "Jan 2024 — March 2025",
    description:
      "Developed and deployed ML models for computer vision and defect detection applications.",
    bullets: [
      "Assisted senior engineers in developing image classification CNN models for defect detection.",
      "Performed data preprocessing, feature selection, and model evaluation on structured/unstructured datasets.",
      "Supported deployment of models and created Power BI dashboards for business insights.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Arbisoft",
    location: "Lahore",
    timeline: "Dec 2022 — March 2023",
    description:
      "Collaborated with senior engineers to develop and fine-tune ML models for client projects.",
    bullets: [
      "Developed and fine-tuned ML models for client projects under senior engineer guidance.",
      "Implemented data preprocessing pipelines in Python (Pandas, Scikit-learn) for model readiness.",
      "Conducted exploratory data analysis (EDA) to identify key trends and improve model features.",
    ],
  },
]

export const FEATURED_PROJECTS = [
  {
    title: "Image Classification for Defect Detection (CNN)",
    description:
      "Developed a CNN to detect defects in manufacturing images, improving quality control and reducing manual inspection time by 30%.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    repo: "https://github.com/Raufnarejo505",
    demo: "#",
    image: "/projects/cnn-defect-detection.jpg", // Add your project image here
    businessImpact: {
      metric: "95% accuracy with data augmentation + transfer learning",
      savings: "30% reduction in manual inspection time",
      roi: "Improved quality control efficiency",
    },
  },
  {
    title: "Recommendation System for E-commerce",
    description:
      "Implemented collaborative filtering & content-based filtering recommendation engine, increasing product recommendation click-through rate by 12%.",
    stack: ["Python", "Scikit-learn", "Pandas", "Flask", "SQL"],
    repo: "https://github.com/Raufnarejo505",
    demo: "#",
    image: "/projects/recommendation-system.jpg", // Add your project image here
    businessImpact: {
      metric: "12% increase in click-through rate",
      savings: "Enhanced user engagement",
      roi: "Integrated recommendation engine as Flask API",
    },
  },
  {
    title: "Sentiment Analysis on Customer Reviews (NLP)",
    description:
      "Preprocessed 200k+ text reviews using NLTK & spaCy, trained ML models achieving 92% F1-score, and built an interactive dashboard in Streamlit.",
    stack: ["Python", "NLTK", "spaCy", "Scikit-learn", "Streamlit"],
    repo: "https://github.com/Raufnarejo505",
    demo: "#",
    image: "/projects/sentiment-analysis.jpg", // Add your project image here
    businessImpact: {
      metric: "92% F1-score on sentiment classification",
      savings: "Processed 200k+ customer reviews",
      roi: "Interactive dashboard for visualization",
    },
  },
  {
    title: "Customer Churn Prediction Model",
    description:
      "Designed and deployed predictive model using gradient boosting to identify at-risk customers, improving retention by 15%.",
    stack: ["Python", "Scikit-learn", "Pandas", "SQL"],
    repo: "https://github.com/Raufnarejo505",
    demo: "#",
    image: "/projects/churn-prediction.jpg", // Add your project image here
    businessImpact: {
      metric: "15% improvement in customer retention",
      savings: "Reduced customer acquisition costs",
      roi: "Production-ready deployment",
    },
  },
  {
    title: "ETL Pipeline for Large Datasets",
    description:
      "Built automated ETL workflows processing 10M+ rows weekly, reducing data processing time by 40% and enabling real-time analytics.",
    stack: ["Python", "Pandas", "SQL", "Airflow"],
    repo: "https://github.com/Raufnarejo505",
    demo: "#",
    image: "/projects/etl-pipeline.jpg", // Add your project image here
    businessImpact: {
      metric: "40% reduction in data processing time",
      savings: "10M+ rows processed weekly",
      roi: "Real-time analytics enabled",
    },
  },
]

export const SERVICES = [
  {
    title: "Data Cleaning & Readiness",
    description:
      "Audit, clean, and document your datasets so downstream modeling is easy and reliable.",
    deliverables: ["Profiling & anomaly scanning", "Reproducible cleaning scripts", "Data quality scorecard"],
  },
  {
    title: "Dashboard Creation",
    description:
      "Executive-ready Power BI dashboards with automated refreshes and embedded narratives.",
    deliverables: ["High-impact visuals", "KPI storytelling", "Scheduled refresh & alerts"],
  },
  {
    title: "SQL Reporting Automation",
    description:
      "SQL optimization plus scheduled reporting and monitoring for data-heavy teams.",
    deliverables: ["Query optimization", "Versioned SQL repo", "Alerting hooks"],
  },
  {
    title: "Machine Learning Models",
    description:
      "Custom ML systems — from forecasting to NLP — deployed with observability baked in.",
    deliverables: ["Experiment tracking", "Model cards", "Deployment playbooks"],
  },
  {
    title: "Business Insights Analytics",
    description:
      "Partner with me to define metrics, evaluate experiments, and align analytics to revenue goals.",
    deliverables: ["Insight memos", "Scenario models", "Enablement workshops"],
  },
]

export const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-r-254241168/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Raufnarejo505",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923493101505",
  },
]

export const CALENDLY_URL = "https://calendly.com/raufa0742" // Replace with your actual Calendly URL

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, FinTech Startup",
    company: "TechFlow Inc.",
    content:
      "Abdul delivered a predictive maintenance system that reduced our downtime by 40%. His attention to production-ready code and clear documentation made integration seamless. Highly recommend for ML projects.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Data Director",
    company: "Retail Analytics Co.",
    content:
      "The automated reporting pipeline Abdul built saves us 15 hours per week. The Power BI dashboards are executive-ready and the SQL optimizations cut query time by 70%. Exceptional work.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "SaaS Platform",
    content:
      "Working with Abdul on our sentiment analysis pipeline was a game-changer. The model accuracy and deployment speed exceeded expectations. He's responsive, professional, and delivers real business value.",
    rating: 5,
  },
]

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Deep dive into your business goals, data landscape, and success metrics. We define clear deliverables and timelines.",
    deliverables: ["Requirements doc", "Data audit", "Project roadmap"],
  },
  {
    step: "02",
    title: "Development & Iteration",
    description:
      "Agile development with weekly check-ins. You see progress in real-time with demos and code reviews.",
    deliverables: ["Sprint updates", "Code reviews", "Live demos"],
  },
  {
    step: "03",
    title: "Testing & Optimization",
    description:
      "Rigorous testing, performance optimization, and validation against business KPIs before deployment.",
    deliverables: ["Test reports", "Performance metrics", "KPI validation"],
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "Production deployment with monitoring, documentation, and knowledge transfer. Ongoing support available.",
    deliverables: ["Deployment guide", "Documentation", "Training sessions"],
  },
]

export const TRUST_BADGES = [
  {
    label: "4+ Years Experience",
    description: "Production ML systems",
  },
  {
    label: "28+ Projects Delivered",
    description: "Across industries",
  },
  {
    label: "96% Client Satisfaction",
    description: "Repeat business rate",
  },
  {
    label: "24hr Response Time",
    description: "Average support response",
  },
]

export const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    description: "Fixed scope, fixed timeline, fixed price",
    bestFor: "Well-defined projects with clear requirements",
    timeline: "2-12 weeks",
    pricing: "Custom quote",
  },
  {
    title: "Retainer",
    description: "Ongoing support and development",
    bestFor: "Long-term partnerships and maintenance",
    timeline: "Monthly commitment",
    pricing: "Starting at $2K/month",
  },
  {
    title: "Hourly Consulting",
    description: "Flexible engagement for ad-hoc needs",
    bestFor: "Quick wins, audits, and consultations",
    timeline: "As needed",
    pricing: "$75-150/hour",
  },
]

export const FAQ_ITEMS = [
  {
    question: "How quickly can you start working on my project?",
    answer: "I can typically start within 1 week of project approval. For urgent projects, I can begin within 2-3 business days. The exact timeline depends on project scope and my current availability, which we'll discuss during our initial consultation.",
  },
  {
    question: "What's included in your ML model development service?",
    answer: "My ML model development includes: data exploration and cleaning, feature engineering, model training and evaluation, hyperparameter tuning, model documentation, deployment scripts, and basic monitoring setup. I also provide model cards explaining performance metrics and limitations.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! I offer post-deployment support packages including model monitoring, performance optimization, retraining schedules, and troubleshooting. Support can be structured as hourly consulting, monthly retainer, or project-based maintenance contracts.",
  },
  {
    question: "What industries have you worked with?",
    answer: "I've delivered ML solutions across fintech, e-commerce, manufacturing, SaaS, and retail industries. My experience includes churn prediction, defect detection, recommendation systems, sentiment analysis, and predictive maintenance—all applicable across various sectors.",
  },
  {
    question: "How do you ensure model quality and reliability?",
    answer: "I follow rigorous ML engineering practices: comprehensive testing (unit, integration, performance), cross-validation strategies, model interpretability analysis (SHAP values), production monitoring setup, and documentation. All models go through validation against business KPIs before deployment.",
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary by scope: simple dashboards (1-2 weeks), ML models (3-6 weeks), end-to-end ML pipelines (6-12 weeks). I provide detailed project roadmaps during discovery and use agile sprints with weekly check-ins so you see progress in real-time.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer: "Absolutely! I'm experienced with Python, SQL, Power BI, cloud platforms (AWS, Azure), and various ML frameworks. I adapt to your existing infrastructure and can integrate with your current tools, databases, and workflows.",
  },
  {
    question: "What makes your approach different from other ML consultants?",
    answer: "I focus on production-ready solutions, not just experiments. Every project includes deployment scripts, monitoring, and documentation. I emphasize business impact—measuring ROI, cost savings, and operational improvements. Plus, I maintain clear communication with weekly demos and transparent progress tracking.",
  },
]

export const RESULTS_METRICS = [
  {
    icon: "TrendingUp",
    value: "15%",
    label: "Average Retention Improvement",
    description: "From churn prediction models",
  },
  {
    icon: "DollarSign",
    value: "$250K+",
    label: "Cost Savings Delivered",
    description: "Annual savings for clients",
  },
  {
    icon: "Clock",
    value: "40%",
    label: "Time Reduction",
    description: "Faster data processing & automation",
  },
  {
    icon: "Users",
    value: "28+",
    label: "Projects Completed",
    description: "Across multiple industries",
  },
]


