import CareerNav from "./CareerNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CareerWrapper = () => {
  const [searchParams] = useSearchParams();
  const selectedUrlField = searchParams.get("field") || "frontend";

  const [selectedField, setSelectedField] = useState(selectedUrlField);

  const [roadmaps] = useState({
    frontend: [
      {
        time: "0-3 Months",
        title: "Master the Fundamentals",
        steps: [
          "Learn HTML5 semantic structure properly",
          "Understand CSS3 layouts using Flexbox and Grid",
          "Learn JavaScript ES6 fundamentals",
          "Build 3–5 static responsive websites",
          "Practice DOM manipulation and events",
        ],
      },
      {
        time: "3-6 Months",
        title: "Modern Frontend Development",
        steps: [
          "Learn React components, hooks, and props",
          "Understand state management and context API",
          "Work with REST APIs using Axios or fetch",
          "Learn routing using React Router",
          "Build 2–3 dynamic React projects",
        ],
      },
      {
        time: "6-9 Months",
        title: "Advanced React & Ecosystem",
        steps: [
          "Master Redux or Zustand",
          "Practice component architecture patterns",
          "Implement authentication with JWT",
          "Improve performance using memoization",
          "Build scalable frontend structures",
        ],
      },
      {
        time: "9-12 Months",
        title: "UI/UX + Animations",
        steps: [
          "Learn Tailwind CSS deeply",
          "Use GSAP for micro interactions",
          "Use Framer Motion for transitions",
          "Study accessibility improvements",
          "Build animated portfolio sections",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Deployment & Job Readiness",
        steps: [
          "Deploy apps using Vercel or Netlify",
          "Create a production-level portfolio",
          "Learn Git branching workflows",
          "Practice basic DSA for interviews",
          "Complete 6+ real-world projects",
        ],
      },
    ],

    backend: [
      {
        time: "0-3 Months",
        title: "Programming Basics",
        steps: [
          "Learn a backend language like Node.js/Python/Java",
          "Understand OOP, functions, loops, and modularity",
          "Learn Git version control",
          "Understand APIs, HTTP, and JSON",
          "Build small CLI/API programs",
        ],
      },
      {
        time: "3-6 Months",
        title: "Backend Frameworks",
        steps: [
          "Learn Express, Django, or Spring Boot",
          "Build CRUD REST APIs",
          "Learn middleware and routing",
          "Understand authentication (JWT, OAuth)",
          "Build 2–3 backend applications",
        ],
      },
      {
        time: "6-9 Months",
        title: "Database Mastery",
        steps: [
          "Learn SQL with MySQL/PostgreSQL",
          "Learn NoSQL with MongoDB",
          "Understand indexing and joins",
          "Work with ORMs like Prisma or Mongoose",
          "Build DB-heavy projects",
        ],
      },
      {
        time: "9-12 Months",
        title: "Advanced Backend Skills",
        steps: [
          "Implement Redis for caching",
          "Use message queues like RabbitMQ",
          "Learn API security best practices",
          "Add rate limiting and throttling",
          "Design scalable API architectures",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Deployment & System Design",
        steps: [
          "Learn Docker and containerization",
          "Deploy apps to AWS or Render",
          "Study load balancing concepts",
          "Learn monolithic vs microservices",
          "Build production-ready backend systems",
        ],
      },
    ],

    fullstack: [
      {
        time: "0-3 Months",
        title: "Frontend Foundations",
        steps: [
          "Learn HTML, CSS, JavaScript",
          "Understand responsive layouting",
          "Study DOM and ES6 features",
          "Build small frontend projects",
          "Learn Git for collaboration",
        ],
      },
      {
        time: "3-6 Months",
        title: "Frontend Framework",
        steps: [
          "Learn React with hooks",
          "Build dynamic UI components",
          "Add API calling functionality",
          "Use global state management",
          "Build 2–3 React projects",
        ],
      },
      {
        time: "6-9 Months",
        title: "Backend Development",
        steps: [
          "Learn Node.js + Express",
          "Build REST APIs",
          "Handle authentication and sessions",
          "Integrate frontend + backend",
          "Build fullstack applications",
        ],
      },
      {
        time: "9-12 Months",
        title: "Databases & Deployment",
        steps: [
          "Learn SQL and NoSQL",
          "Deploy fullstack apps",
          "Use Docker basics",
          "Learn environment management",
          "Host projects on cloud platforms",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Advanced Fullstack",
        steps: [
          "Learn CI/CD pipelines",
          "Add testing frameworks",
          "Focus on architecture patterns",
          "Improve app performance",
          "Build 6+ advanced projects",
        ],
      },
    ],

    dataScientist: [
      {
        time: "0-3 Months",
        title: "Math & Python Basics",
        steps: [
          "Learn Python fundamentals",
          "Study statistics and probability",
          "Learn NumPy and Pandas",
          "Clean small datasets",
          "Build simple data analysis scripts",
        ],
      },
      {
        time: "3-6 Months",
        title: "Data Visualization",
        steps: [
          "Learn Matplotlib and Seaborn",
          "Build dashboards with Plotly",
          "Analyze real datasets",
          "Understand EDA techniques",
          "Create visual storytelling projects",
        ],
      },
      {
        time: "6-9 Months",
        title: "Machine Learning Foundations",
        steps: [
          "Learn supervised ML models",
          "Train models using Scikit-Learn",
          "Evaluate models using metrics",
          "Work on regression & classification",
          "Build ML mini projects",
        ],
      },
      {
        time: "9-12 Months",
        title: "Advanced ML",
        steps: [
          "Learn feature engineering",
          "Understand hyperparameter tuning",
          "Learn unsupervised learning",
          "Practice model deployment",
          "Build end-to-end ML pipelines",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Real-World DS Skills",
        steps: [
          "Work with big data tools",
          "Deploy ML models on cloud",
          "Build portfolio case studies",
          "Learn experiment tracking",
          "Prepare for DS interviews",
        ],
      },
    ],

    ai_ml: [
      {
        time: "0-3 Months",
        title: "Math & Programming",
        steps: [
          "Master Python basics",
          "Learn calculus and linear algebra essentials",
          "Study probability and statistics",
          "Explore NumPy, Pandas, Matplotlib",
          "Build math-focused ML scripts",
        ],
      },
      {
        time: "3-6 Months",
        title: "Core Machine Learning",
        steps: [
          "Learn ML algorithms deeply",
          "Build models using Scikit-Learn",
          "Learn evaluation metrics",
          "Handle data preprocessing",
          "Build ML case studies",
        ],
      },
      {
        time: "6-9 Months",
        title: "Deep Learning Basics",
        steps: [
          "Learn neural networks and backprop",
          "Use TensorFlow/PyTorch",
          "Build image classifiers",
          "Experiment with MLPs & CNNs",
          "Train models on real datasets",
        ],
      },
      {
        time: "9-12 Months",
        title: "Advanced AI",
        steps: [
          "Learn LLM basics",
          "Study transformers & embeddings",
          "Learn NLP techniques",
          "Work with pretrained models",
          "Deploy deep learning models",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "AI Specialization",
        steps: [
          "Deep dive into GenAI tools",
          "Learn vector databases",
          "Build AI-powered apps",
          "Optimize models for production",
          "Prepare for AI/ML interviews",
        ],
      },
    ],

    devops: [
      {
        time: "0-3 Months",
        title: "Linux & Networking Basics",
        steps: [
          "Learn Linux commands",
          "Understand networking fundamentals",
          "Learn Git and GitHub",
          "Study shell scripting",
          "Set up local servers",
        ],
      },
      {
        time: "3-6 Months",
        title: "Containers & CI/CD",
        steps: [
          "Learn Docker deeply",
          "Understand container orchestration",
          "Build CI/CD pipelines",
          "Use GitHub Actions or Jenkins",
          "Automate testing environments",
        ],
      },
      {
        time: "6-9 Months",
        title: "Cloud Platforms",
        steps: [
          "Learn AWS services",
          "Use EC2, S3, Lambda",
          "Learn GCP or Azure basics",
          "Deploy backend apps",
          "Set up cloud monitoring",
        ],
      },
      {
        time: "9-12 Months",
        title: "Infrastructure Automation",
        steps: [
          "Learn Terraform",
          "Use Ansible for config management",
          "Automate deployments",
          "Manage secrets and environment vars",
          "Create infrastructure pipelines",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "DevOps Maturity",
        steps: [
          "Master Kubernetes",
          "Learn Helm charts",
          "Set up production-grade systems",
          "Monitor using Prometheus/Grafana",
          "Optimize cloud costs",
        ],
      },
    ],

    dataEngineer: [
      {
        time: "0-3 Months",
        title: "Foundations",
        steps: [
          "Learn Python scripting",
          "Understand databases basics",
          "Learn SQL deeply",
          "Work with CSV/JSON datasets",
          "Learn Git versioning",
        ],
      },
      {
        time: "3-6 Months",
        title: "Data Pipelines",
        steps: [
          "Learn ETL fundamentals",
          "Build data pipelines with Python",
          "Use Apache Airflow",
          "Practice data cleaning techniques",
          "Build mini pipeline projects",
        ],
      },
      {
        time: "6-9 Months",
        title: "Big Data Systems",
        steps: [
          "Learn Hadoop basics",
          "Use Spark for batch processing",
          "Understand distributed computing",
          "Store data in HDFS",
          "Build big data workflows",
        ],
      },
      {
        time: "9-12 Months",
        title: "Cloud Data Engineering",
        steps: [
          "Learn AWS Glue, Redshift, S3",
          "Use Google BigQuery",
          "Build cloud ETL pipelines",
          "Practice real-time streaming",
          "Learn data warehousing",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Advanced Data Engineering",
        steps: [
          "Master Kafka streaming",
          "Optimize pipelines for speed",
          "Build lakehouse architectures",
          "Implement monitoring tools",
          "Create enterprise-level pipelines",
        ],
      },
    ],

    robotics: [
      {
        time: "0-3 Months",
        title: "Robotics Fundamentals",
        steps: [
          "Learn C++ or Python",
          "Study basic electronics",
          "Understand sensors and actuators",
          "Learn microcontroller basics",
          "Build simple hardware circuits",
        ],
      },
      {
        time: "3-6 Months",
        title: "Robotics Programming",
        steps: [
          "Learn ROS (Robot Operating System)",
          "Write robot control scripts",
          "Simulate robots using Gazebo",
          "Work with LiDAR and cameras",
          "Build simple robotic arms",
        ],
      },
      {
        time: "6-9 Months",
        title: "Perception & Navigation",
        steps: [
          "Learn computer vision basics",
          "Implement SLAM",
          "Work with OpenCV",
          "Use depth sensors for mapping",
          "Build navigation systems",
        ],
      },
      {
        time: "9-12 Months",
        title: "Robot Intelligence",
        steps: [
          "Use ML for motion prediction",
          "Train object detection models",
          "Optimize robot movement",
          "Implement path planning",
          "Build autonomous systems",
        ],
      },
      {
        time: "1-1.5 Years",
        title: "Advanced Robotics",
        steps: [
          "Build autonomous mobile robots",
          "Learn ROS2 for modern robotics",
          "Integrate sensors in real environments",
          "Optimize kinematics and dynamics",
          "Build full robotics projects",
        ],
      },
    ],
  });

  return (
    <div>
      <div className="flex justify-center mt-4">
        <CareerNav setSelectedField={setSelectedField} />
      </div>

      <div className="mt-8 lg:mt-8">
        <Outlet context={{ roadmaps, selectedField }} />
      </div>
    </div>
  );
};

export default CareerWrapper;
