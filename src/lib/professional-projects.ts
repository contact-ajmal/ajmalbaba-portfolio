export interface ProfessionalProject {
    id: string;
    name: string;
    company: string;
    role: string;
    category: string;
    description: string;
    impact: string;
    techStack: string[];
    icon: string;
}

export const professionalProjects: ProfessionalProject[] = [
    // Hawk-Eye Innovations (Sony Sports)
    {
        id: "biomechanics-lakehouse",
        name: "Real-Time Biomechanics Lakehouse",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Real-Time Streaming",
        description:
            "Designed the Flink-Kafka-Iceberg backbone to process sub-second skeletal tracking (SkeleTRACK) and MLB pitch data for live broadcast. The platform ingests millions of skeletal data points per game, enabling real-time biomechanics analytics for player performance and broadcast enhancements.",
        impact: "Powers live broadcast analytics across MLB with sub-second latency",
        techStack: ["Apache Flink", "Apache Kafka", "Apache Iceberg", "AWS", "Python"],
        icon: "Activity",
    },
    {
        id: "saot-fifa",
        name: "Semi-Automated Offside Tech (SAOT)",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Computer Vision",
        description:
            "Architected the data pipeline powering FIFA's semi-automated offside detection system, processing 29-point skeletal models in real-time during live matches. The system combines limb-tracking cameras with ball-tracking data to deliver frame-accurate offside decisions within seconds.",
        impact: "Deployed across 900+ FIFA matches globally, transforming football officiating",
        techStack: ["Computer Vision", "Real-Time Processing", "Skeletal Tracking", "AWS", "Kafka"],
        icon: "Crosshair",
    },
    {
        id: "nhl-insights",
        name: "NHL Insights Platform",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Analytics Platform",
        description:
            "Built the \"Insight Ports\" architecture that transforms live game telemetry into real-time visualizations for teams, fans, and broadcasters. The platform processes puck and player tracking data to generate advanced analytics, powering in-game graphics and post-game analysis.",
        impact: "Delivers real-time analytics to NHL teams, fans, and broadcast networks",
        techStack: ["Real-Time Analytics", "Data Visualization", "Streaming Architecture", "AWS"],
        icon: "BarChart3",
    },
    {
        id: "kinatrax-nba",
        name: "KinaTrax 3D Integration",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Motion Capture",
        description:
            "Led the data integration of markerless motion capture (Computer Vision) to drive NBA player development and shooting analytics. The system captures full 3D skeletal motion without physical markers, enabling precise biomechanical analysis of shooting form, movement patterns, and injury risk.",
        impact: "Enables NBA player development programs with markerless 3D motion analysis",
        techStack: ["Computer Vision", "3D Motion Capture", "Biomechanics", "Machine Learning"],
        icon: "Move3D",
    },
    {
        id: "smart-video",
        name: "SMART Video Review System",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Video Analytics",
        description:
            "Engineered the synchronized data/video capture framework used for VAR (Football) and DRS (Cricket) independent officiating. The system synchronizes multiple camera feeds with ball-tracking and skeletal data, providing officials with frame-accurate, multi-angle review capabilities.",
        impact: "Powers VAR and DRS officiating systems across global football and cricket",
        techStack: ["Video Synchronization", "Multi-Camera Systems", "Real-Time Processing", "Data Fusion"],
        icon: "Video",
    },
    {
        id: "injury-review",
        name: "Medical & Injury Review",
        company: "Hawk-Eye Innovations (Sony Sports)",
        role: "Lead Data Architect",
        category: "Sports Medicine",
        description:
            "Developed the \"Injury Review\" data workflow, allowing medical teams to instantly tag, zoom, and archive multi-angle video for athlete safety. The system enables real-time incident detection and provides medical staff with immediate access to synchronized multi-angle replays.",
        impact: "Enhances athlete safety protocols across multiple global sports leagues",
        techStack: ["Video Analytics", "Real-Time Tagging", "Multi-Angle Replay", "Cloud Storage"],
        icon: "HeartPulse",
    },

    // Atos (Cloudreach / Eviden)
    {
        id: "atos-datalake",
        name: "ATOS Data Lake & MLOps",
        company: "Atos (Cloudreach / Eviden)",
        role: "Senior Data & Cloud Architect",
        category: "Cloud & AI Platform",
        description:
            "Architected a secure, enterprise-grade AWS Data Lake and GenAI platform using SageMaker and Bedrock, enabling global master data governance and rapid model deployment. Defined data models, metadata standards, and governance processes using AWS Lake Formation, Glue, and Informatica MDM.",
        impact: "Enabled AI workloads and unified data governance across global business units",
        techStack: ["AWS Data Lake", "SageMaker", "AWS Bedrock", "Informatica MDM", "Lake Formation", "Glue"],
        icon: "Cloud",
    },

    // Ministry of Interior – Government of Qatar
    {
        id: "fifa-wc-2022",
        name: "FIFA World Cup 2022 Infrastructure",
        company: "Ministry of Interior – Government of Qatar",
        role: "Lead Systems & Data Infrastructure Architect",
        category: "National Scale Infrastructure",
        description:
            "Built the $200M hybrid data infrastructure combining on-premise Hadoop ecosystems with AWS cloud storage, ensuring 100% uptime for national security, logistics, and analytics during the FIFA World Cup 2022. Managed petabyte-scale data systems with comprehensive disaster recovery strategies.",
        impact: "$200M infrastructure with 100% uptime during the world's largest sporting event",
        techStack: ["Hadoop", "AWS", "Hybrid Cloud", "Disaster Recovery", "Petabyte-Scale Storage"],
        icon: "Globe",
    },
];
