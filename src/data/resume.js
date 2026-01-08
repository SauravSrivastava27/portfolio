import { FaCode, FaDatabase, FaCloud, FaTools, FaShieldAlt, FaBug } from 'react-icons/fa';

export const resumeData = {
    name: "Saurav Srivastava",
    title: "Data Engineer / Front-End Developer",
    contact: {
        email: "saurav.srivastava27@outlook.com",
        phone: "+918602253045",
        linkedin: "saurav-srivastava",
        linkedinUrl: "https://linkedin.com/in/saurav-srivastava"
    },
    summary: "Data Engineer and Front-End Developer with 8+ years of combined experience in building scalable data pipelines, automating workflows, and developing responsive web applications. Skilled in Snowflake, Airflow, NiFi, Python, React, and AWS. Strong background in CI/CD, API integrations, secure file operations, and end-to-end production delivery for global enterprise platforms.",
    skills: [
        { name: "Programming", icon: FaCode, items: ["HTML", "CSS", "SCSS", "JavaScript", "React", "Bootstrap", "jQuery", "SQL", "Python"] },
        { name: "Data Engineering", icon: FaDatabase, items: ["API Integration", "Workflow Automation", "Snowflake", "Apache NiFi", "Apache Airflow", "Incremental Loads", "Data Validation"] },
        { name: "Cloud & DevOps", icon: FaCloud, items: ["AWS (EKS, S3, EC2)", "CI/CD Pipelines (Harness)", "Git", "GitHub"] },
        { name: "Tools", icon: FaTools, items: ["VS Code", "WinSCP", "PuTTY", "Git Bash", "Jira", "Postman"] },
        { name: "Security", icon: FaShieldAlt, items: ["GPG Encryption", "Public/Private Key Management", "Secure File Operations"] },
        { name: "Problem Solving", icon: FaBug, items: ["Debugging", "RCA", "Performance Optimization", "Reliability Engineering"] }
    ],
    experience: [
        {
            company: "Accenture Solutions Pvt.Ltd",
            role: "Data Engineer / Front-End Developer",
            period: "October 2021 - Present",
            projects: [
                {
                    name: "Marriott International — Food And Beverages",
                    details: [
                        "Integrated SevenRooms and OpenTable reservation platforms into the Marriott Bonvoy ecosystem and ingested large-scale reservation, customer, venue, and event data into the Marriott MDP system to support global brand expansion.",
                        "Developed automation scripts in Python to validate, clean, and transform incoming datasets for ingestion into MDP.",
                        "Built and managed CI/CD pipelines using Harness to automate deployment of workflows, configurations, and environment updates.",
                        "Deployed and monitored microservices and ingestion components on Amazon EKS, ensuring scalability, stability, and smooth end-to-end operation.",
                        "Utilized Akana configuration to manage and secure API endpoints that were hosted outside the Marriott environment, ensuring seamless connectivity and controlled access for data ingestion workflows.",
                        "Performed end-to-end testing and supported production operations, including RCA and continuous improvements, to ensure system accuracy, reliability, and minimal deployment downtime."
                    ]
                },
                {
                    name: "Marriott International — Growth Project",
                    details: [
                        "Worked on multiple MI Growth initiatives, including the MAX West partnership and Guanxi, aimed at expanding Marriott International's global footprint and enabling seamless cross-brand loyalty benefits.",
                        "Supported end-to-end data integration across reservation, finance, loyalty, and stay-related domains using Airflow, NiFi, and Snowflake.",
                        "Built automated data pipelines to manage 2-way data exchanges with partner hotel groups, ensuring accurate ingestion of inbound feeds and reliable delivery of outbound reservation and financial data.",
                        "Enabled smooth transfer of aggregated finance actuals, reservation-level details, Elite Room Night Credits, and loyalty metadata into Snowflake-based MDP systems."
                    ]
                },
                {
                    name: "Silicon Valley Bank",
                    details: [
                        "Designed and implemented front-end components using HTML, CSS3, SCSS, and Bootstrap, ensuring a clean and intuitive user experience.",
                        "Built a fully responsive layout leveraging Bootstrap's grid system and utility classes to deliver seamless performance across desktop, tablet, and mobile devices.",
                        "Developed interactive features and enhanced UI behavior using .NET Core 2.0, jQuery, jQuery UI, and Bootstrap 4."
                    ]
                }
            ]
        },
        {
            company: "Humane Business Intelligence Technology Solutions Pvt. Ltd",
            role: "Front-End Developer",
            period: "Aug 2017 - Oct 2021",
            projects: [
                {
                    name: "Galen Growth Asia",
                    details: [
                        "HealthTech Alpha (HTA) is a HealthTech analytics platform launched by Galen Growth Asia (GGA). It is one of the most advanced Digital Health analytics platforms for investors.",
                        "The platform empowers investors, corporates, and startups to accelerate their digital health strategies.",
                        "Built UI components and improved user workflows using React, Bootstrap 4, and SCSS.",
                        "Performed front-end development, including API integration and UI development, to enhance platform functionality and user experience."
                    ]
                },
                {
                    name: "Institute of Behavioural Training (IBT)",
                    details: [
                        "Contributed to the Institute for Behavioural Training (IBT) platform, a comprehensive training hub for individuals who interact with, teach, care for, or treat people with autism spectrum disorder (ASD).",
                        "Supported the development of training modules and interfaces aimed at improving accessibility and learning experiences for caregivers and professionals.",
                        "Developed and enhanced UI components using .NET Core 2.0, jQuery, jQuery UI, CSS, and Bootstrap 3.",
                        "Performed UI development tasks, focusing on improving usability, responsiveness, and overall user interaction across the platform."
                    ]
                }
            ]
        }
    ],
    education: [
        {
            school: "Patel College of Science and Technology (RGPV)",
            degree: "Bachelor of Engineering in Computer Science and Engineering",
            location: "Bhopal, Madhya Pradesh",
            year: "2012 - 2016"
        }
    ],
    certifications: [
        "SnowPro Core – Snowflake",
        "Astronomer Certification: Airflow 2 & 3 Fundamentals, DAG Authoring",
        "GitHub Copilot Fundamentals",
        "Accenture ACE Award",
        "Accenture Legacy Award",
        "Multiple Integrity Awards for high performance and impact"
    ]
};
