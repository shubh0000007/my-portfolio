export const personalInfo = {
  // Basic Information
  name: "Shubham Jain",
  title: "Data Analyst",
  email: "Shubhamjainn1256@gmail.com",
  
  // Social Links
  social: {
    github: "https://github.com/shubh0000007",
    linkedin: "https://linkedin.com/in/shubh95/",
    twitter: "", // optional
    portfolio: "" // optional
  },
  
  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    tagline: "I'm a Data Analyst who transforms complex data into actionable insights and intelligent solutions.",
    description: "I specialize in data analysis, building scalable data pipelines, developing machine learning models, and creating impactful data visualizations that drive business decisions."
  },
  
  // About Section
  about: {
    story: [
      "My journey in data analysis began with a passion for uncovering insights that drive business decisions. From my early days working with financial data at ATMS Tech Solutions to my current role analyzing customer behavior and market trends, I've always been focused on turning raw data into clear, actionable business intelligence.",
      "I've had the opportunity to work on diverse analytical projects that span the entire data pipeline - from cleaning and preparing data in Excel and SQL to creating interactive dashboards in Power BI and Tableau. Each project has taught me the importance of not just analyzing data, but presenting insights in a way that stakeholders can easily understand and act upon.",
      "Currently pursuing my Master's in Data Science at SUNY Buffalo, I'm constantly expanding my analytical toolkit with new techniques in data visualization, statistical analysis, and business intelligence. My goal is to build analytical solutions that not only provide insights but also help organizations make data-driven decisions that impact their bottom line."
    ],
    profileImage: "/shubham-headshot.jpg" // Place your image in the public folder
  },
  
  // Core Values/Principles
  values: [
    {
      icon: "BrainCircuit",
      title: "Data-Driven Insights",
      description: "I transform complex datasets into actionable insights that drive strategic business decisions."
    },
    {
      icon: "Rocket",
      title: "Scalable Solutions",
      description: "I build robust, scalable data pipelines and ML systems that grow with business needs."
    },
    {
      icon: "Scale",
      title: "Research Excellence",
      description: "I conduct rigorous research and publish findings that contribute to the field of AI/ML."
    },
    {
      icon: "Milestone",
      title: "Continuous Learning",
      description: "I stay current with emerging technologies and methodologies in data science and AI."
    }
  ],
  
  // Skills Section
  skills: {
    programming: ["Python", "MATLAB", "R", "SQL"],
    ml_dl: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost", "Pandas", "NumPy", "SpaCy", "NLTK", "PySpark"],
    analytics: ["Data Wrangling", "Data Visualization", "Business Intelligence", "ETL", "A/B Testing", "Predictive Analytics", "Time Series Forecasting"],
    visualization: ["Tableau", "Power BI", "Excel", "Google Sheets", "Matplotlib", "Plotly", "Jupyter Notebooks"],
    cloud_devops: ["AWS", "Azure", "Google Cloud", "Git", "GitHub", "JIRA", "Confluence", "Docker", "Databricks"],
    databases: ["Snowflake", "Spark", "Hadoop", "HDFS", "PostgreSQL", "MySQL"]
  },
  
  // Projects
  projects: [
    {
      title: "Cross-Domain Sentiment Analysis Using ML/DL Models",
      description: "Published research paper in Springer (2024) on building sentiment analysis models that generalize across domains using 1.6 million real-world text samples from Twitter, Amazon, and IMDb. Designed and evaluated multiple deep learning architectures including LSTM, BiLSTM, and CNN, achieving 82.56% accuracy with BiLSTM for cross-domain sentiment classification.",
      image: "/sentiment-analysis.png",
      technologies: {
        'Deep Learning': ['LSTM', 'BiLSTM', 'CNN', 'TensorFlow', 'PyTorch'],
        'NLP': ['SpaCy', 'NLTK', 'Text Preprocessing', 'Tokenization'],
        'Research': ['Peer-reviewed Publication', 'Cross-domain Analysis', 'Model Transferability']
      },
      githubUrl: "https://github.com/shubh95/sentiment-analysis", // Update with actual link
      category: "AI/ML"
    },
    {
      title: "Car Sales Dashboard using Power BI",
      description: "Crafted a Power BI dashboard using DAX to analyze 24K car sales records, focusing on KPIs like Annual Income and Transmission Type. Conducted A/B testing by segmenting customers based on income and transmission type, identifying optimal marketing strategy that improved targeting accuracy by 20% and boosted lead conversion rates by 15%.",
      image: "/powerbi-dashboard.png",
      technologies: {
        'Business Intelligence': ['Power BI', 'DAX', 'Data Visualization'],
        'Analytics': ['A/B Testing', 'Customer Segmentation', 'KPI Analysis'],
        'Business Impact': ['20% Targeting Accuracy', '15% Lead Conversion', 'Data-driven Decisions']
      },
      githubUrl: "https://github.com/shubh95/car-sales-dashboard", // Update with actual link
      category: "Data Analytics"
    },
    {
      title: "BlinkIT Grocery Sales Dashboard using Excel",
      description: "Designed an interactive Excel dashboard with data visualization to analyze 8.5K+ SKUs, tracking $1.20M in sales and trends. Analyzed sales by outlet type, leveraging business insights to show Tier 2 outlets generated over $935K in revenue. Segmented item types and fat content, identifying key top-sellers like fruits and snacks totaling $350K+ in revenue.",
      image: "/blinkit-excel-dashboard.jpg",
      technologies: {
        'Data Analysis': ['Excel', 'Pivot Tables', 'Data Visualization', 'VBA'],
        'Business Intelligence': ['Sales Analytics', 'SKU Analysis', 'Revenue Tracking'],
        'Business Impact': ['$1.20M Sales Analysis', '$935K Tier 2 Revenue', '$350K+ Top-sellers Revenue']
      },
      githubUrl: "https://github.com/shubh0000007/BlinkIT-Grocery-Sales-Dashboard-using-Excel",
      category: "Data Analytics"
    },
    {
      title: "Azure End-to-End Data Engineering with NYC Taxi Data",
      description: "Designed and orchestrated automated data ingestion pipelines using Azure Data Factory to extract, transform, and load 10 million+ NYC Taxi records into Delta Lake. Implemented 3-layer Medallion Architecture on Databricks using PySpark and SQL, reducing query latency by 40% and enabling real-time analytics with Tableau dashboards.",
      image: "/azure-data-engineering.png",
      technologies: {
        'Cloud Platform': ['Azure Data Factory', 'Azure Databricks', 'Delta Lake'],
        'Big Data': ['PySpark', 'SQL', 'Data Pipeline Orchestration'],
        'Analytics': ['Tableau', 'Real-time Analytics', 'Performance Optimization']
      },
      githubUrl: "https://github.com/shubh95/nyc-taxi-data-engineering", // Update with actual link
      category: "Data Engineering"
    },
    {
      title: "Tableau Dashboard: King County Real Estate Insights",
      description: "Built an interactive Tableau dashboard to analyze King County housing market trends. Added dynamic filters and geospatial mapping to enable user-driven insights. Boosted overall user engagement and data usability by 70% through improved visualization design.",
      image: "/tableau-real-estate.png",
      technologies: {
        'Data Visualization': ['Tableau', 'Interactive Dashboards', 'Geospatial Mapping'],
        'Analytics': ['Dynamic Filters', 'User-driven Insights', 'Market Analysis'],
        'Business Impact': ['70% User Engagement', 'Improved Data Usability', 'Real Estate Analytics']
      },
      githubUrl: "https://github.com/shubh0000007/King-County-WA-Housing-Market-Insights-A-Tableau-Dashboard",
      category: "Data Analytics"
    },
    {
      title: "Loan Eligibility Prediction",
      description: "Developed a loan eligibility model using EDA and machine learning, ensuring risk management compliance. Preprocessed data with missing value handling, encoding, feature scaling, and outlier detection to improve model performance. Trained models like Naive Bayes using Scikit-learn, achieving 83% accuracy and enhancing prediction reliability.",
      image: "/loan-eligibility-prediction.jpg",
      technologies: {
        'Machine Learning': ['Scikit-learn', 'Naive Bayes', 'Decision Trees', 'Jupyter Notebooks'],
        'Data Preprocessing': ['Missing Value Handling', 'Feature Encoding', 'Feature Scaling', 'Outlier Detection'],
        'Business Impact': ['83% Model Accuracy', 'Risk Management Compliance', 'Enhanced Prediction Reliability']
      },
      githubUrl: "https://github.com/shubh0000007/LoanEligibilityPrediction",
      category: "AI/ML"
    },
    {
      title: "COVID-19 Global Vaccine Tracker (Tableau)",
      description: "Tracked global vaccine progress with KPIs showing 51.26% of the global population remained unvaccinated by end of 2021. Built an interactive dashboard with continent, country, and date filters for easy exploration. Highlighted countries exceeding 100% vaccination due to external or tourist-based reporting.",
      image: "/covid-vaccine-tracker.png",
      technologies: {
        'Data Visualization': ['Tableau', 'Interactive Dashboards', 'Global Analytics'],
        'Public Health': ['Vaccine Tracking', 'Population Analysis', 'KPIs'],
        'Business Impact': ['Global Coverage Analysis', '51.26% Unvaccinated Population', 'Multi-dimensional Filtering']
      },
      githubUrl: "https://github.com/shubh0000007/Tableau-COVID-19-Global-Vaccine-Tracker-Dashboard",
      category: "Data Analytics"
    },
    {
      title: "HR Analytics Dashboard (Power BI)",
      description: "Identified that 49% of attrition occurred in the 26–35 age group, guiding targeted retention strategies. Analyzed 1,470 employees across job roles, education, age, and salary to understand attrition trends. Uncovered high-risk roles like Sales Executive and Lab Technician using clear, visual insights.",
      image: "/hr-analytics-dashboard.png",
      technologies: {
        'Business Intelligence': ['Power BI', 'DAX', 'Data Visualization'],
        'HR Analytics': ['Attrition Analysis', 'Employee Demographics', 'Retention Strategies'],
        'Business Impact': ['49% Attrition in 26-35 Age Group', '1,470 Employee Analysis', 'High-risk Role Identification']
      },
      githubUrl: "https://github.com/shubh0000007/Advanced-HR-Analytics-Power-BI-Dashboard-",
      category: "Data Analytics"
    }
  ],
  
  // Education
  education: [
    {
      degree: "Master of Science in Data Science",
      school: "State University of New York at Buffalo, School of Engineering and Applied Science",
      year: "Expected December 2025",
      description: "GPA: 3.4 - Focus on advanced data science, machine learning, and statistical analysis."
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "A.P Shah Institute of Technology, Thane",
      year: "2020-2024",
      description: "GPA: 3.6 - Graduated with Distinction. Specialized in algorithms, software engineering, and foundational AI concepts."
    }
  ],
  
  // Experience
  experience: [
    {
      title: "Data Analyst Intern",
      company: "AllPeople Marketplace",
      period: "August 2025 - Present",
      location: "San Luis Obispo, CA, USA",
      description: "Analyzed product performance and pricing across 5–10 categories, comparing data with competitor platforms and providing recommendations that improved pricing consistency by 15%. Conducted competitor research on 50+ products, benchmarking prices and supporting sustainable strategies that balanced affordability with eco-friendly positioning. Built and maintained Power BI dashboards with DAX measures to track KPIs and sales trends, improving reporting accuracy and enabling faster decision-making for leadership. Collaborated with leadership on reports and funding applications, delivering insights that guided pricing and growth decisions."
    },
    {
      title: "Data Analyst Intern",
      company: "ATMS TECH SOLUTION PVT LTD",
      period: "April 2022 - March 2023",
      location: "Thane, MH, India",
      description: "Optimized financial datasets using Python with MySQL, achieving a 30% reduction in data retrieval time. Created dashboards in Power BI/Tableau, reducing reporting time by 20% and helping finance identify cost-saving opportunities. Conducted loan portfolio analysis using SQL, Excel, and BI dashboards, generating insights on risk patterns and approval trends that improved efficiency for underwriters. Automated data pipeline with AWS Glue, optimizing ETL processes and reducing data processing time by 25%."
    },
    {
      title: "AI-ML Virtual Intern",
      company: "AICTE",
      period: "July 2022 - September 2022",
      location: "Thane, MH, India",
      description: "Performed exploratory data analysis (EDA) on a telecom customer dataset, using Python, Pandas, SQL, and Seaborn to identify patterns in usage, tenure, and churn behavior. Conducted churn analysis with Python and scikit-learn, achieving 86% accuracy and identifying key customer risk factors that influenced churn. Used SQL to extract, filter, and aggregate customer data, enabling the development of a churn-risk dashboard and contributing to a 15% improvement in retention strategy."
    }
  ],
  
  // Contact Section
  contact: {
    message: "I'm passionate about leveraging data science and machine learning to solve complex business challenges. Let's connect to discuss opportunities in data science, ML engineering, or research collaborations!",
    emailSubject: "Portfolio Contact - Data Science & ML Opportunities"
  }
}; 