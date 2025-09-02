import {Skill} from "@/types/onboarding/Skill";

export const skillOptions: { key: Skill; value: Skill; label: string }[] = [
    {key: Skill.FRONTEND, value: Skill.FRONTEND, label: "Frontend (React, Angular, Vue.js, Svelte…)"},
    {key: Skill.BACKEND, value: Skill.BACKEND, label: "Backend (Java, Python, Node.js, PHP, .NET, Ruby…)"},
    {
        key: Skill.MOBILE_DEVELOPMENT,
        value: Skill.MOBILE_DEVELOPMENT,
        label: "Mobile Development (iOS, Android, Flutter, React Native…)"
    },
    {key: Skill.FULLSTACK_DEVELOPMENT, value: Skill.FULLSTACK_DEVELOPMENT, label: "Fullstack Development"},
    {key: Skill.LOW_CODE_NO_CODE, value: Skill.LOW_CODE_NO_CODE, label: "Low-code / No-code"},
    {
        key: Skill.DATA_ENGINEERING,
        value: Skill.DATA_ENGINEERING,
        label: "Data Engineering (ETL, Big Data, Spark, Hadoop…)"
    },
    {key: Skill.DATA_SCIENCE_ML, value: Skill.DATA_SCIENCE_ML, label: "Data Science & Machine Learning"},
    {
        key: Skill.AI_DEEP_LEARNING,
        value: Skill.AI_DEEP_LEARNING,
        label: "Artificial Intelligence & Deep Learning (NLP, Computer Vision…)"
    },
    {
        key: Skill.BUSINESS_INTELLIGENCE,
        value: Skill.BUSINESS_INTELLIGENCE,
        label: "Business Intelligence (Power BI, Tableau, Qlik…)"
    },
    {key: Skill.CLOUD_COMPUTING, value: Skill.CLOUD_COMPUTING, label: "Cloud Computing (AWS, Azure, GCP)"},
    {key: Skill.DEVOPS_CI_CD, value: Skill.DEVOPS_CI_CD, label: "DevOps / CI-CD (Docker, Kubernetes, Terraform…)"},
    {key: Skill.INFRASTRUCTURE_AS_CODE, value: Skill.INFRASTRUCTURE_AS_CODE, label: "Infrastructure as Code"},
    {
        key: Skill.SYSTEMS_ADMINISTRATION,
        value: Skill.SYSTEMS_ADMINISTRATION,
        label: "Systems Administration (Linux, Windows, Unix)"
    },
    {
        key: Skill.NETWORKS_TELECOMMUNICATIONS,
        value: Skill.NETWORKS_TELECOMMUNICATIONS,
        label: "Networks & Telecommunications"
    },
    {key: Skill.DATABASES, value: Skill.DATABASES, label: "Databases"},
    {
        key: Skill.VIRTUALIZATION_CONTAINERIZATION,
        value: Skill.VIRTUALIZATION_CONTAINERIZATION,
        label: "Virtualization & Containerization"
    },
    {key: Skill.PRODUCT_MANAGEMENT, value: Skill.PRODUCT_MANAGEMENT, label: "Product Management"},
    {key: Skill.AGILE_METHODOLOGIES, value: Skill.AGILE_METHODOLOGIES, label: "Agile / Scrum / Kanban Methodologies"},
    {key: Skill.IT_PROJECT_MANAGEMENT, value: Skill.IT_PROJECT_MANAGEMENT, label: "IT Project Management"},
    {key: Skill.BUSINESS_ANALYSIS, value: Skill.BUSINESS_ANALYSIS, label: "Business Analysis"},
    {key: Skill.UI_UX_DESIGN, value: Skill.UI_UX_DESIGN, label: "UI/UX Design"},
    {key: Skill.WEB_DESIGN_INTEGRATION, value: Skill.WEB_DESIGN_INTEGRATION, label: "Web Design & Integration"},
    {key: Skill.PROTOTYPING, value: Skill.PROTOTYPING, label: "Prototyping (Figma, Sketch, Adobe XD)"}
];