/**
 * Seeds the Services and Solutions collections with the full content set.
 *
 * Run locally with:
 *   pnpm tsx scripts/seed-services-solutions.ts
 *
 * Safe to re-run — it upserts by slug (updates if a doc with that slug
 * already exists, creates it otherwise). Loads .env.development by default;
 * pass --env=production to use .env.production instead.
 */
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const envFlag = process.argv.find((a) => a.startsWith('--env='))
const envFile = envFlag ? `.env.${envFlag.split('=')[1]}` : '.env.development'
dotenv.config({ path: envFile })

const dirname = path.dirname(fileURLToPath(import.meta.url))

type Feature = { title: string; description?: string }

interface ServiceSeed {
  slug: string
  icon: string
  title: string
  category: 'Managed Services' | 'Infrastructure Modernisation' | 'Data, Analytics & AI' | 'Application Modernisation'
  tagline: string
  description: string
  fullDescription: string
  features?: Feature[]
  order: number
}

interface SolutionSeed {
  slug: string
  icon: string
  tag: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  features?: Feature[]
  order: number
}

const services: ServiceSeed[] = [
  {
    slug: 'end-to-end-cloud-management',
    icon: 'fas fa-server',
    title: 'End-to-End Cloud Management',
    category: 'Managed Services',
    tagline: "Leverage Smart Cloud & Redefine What's Possible",
    description:
      'As a comprehensive managed services provider, we take full responsibility for your cloud ecosystem—delivering enhanced agility, high availability, and seamless operations.',
    fullDescription:
      'As a comprehensive managed services provider, we take full responsibility for your cloud ecosystem—delivering enhanced agility, high availability, and seamless operations. Our solutions are designed to ensure minimal disruption, robust security, and adherence to global compliance standards, while enabling intelligent workflow and network management. Through IT modernization, data intelligence, and automated analytics, we help organizations achieve continuous performance optimization and uninterrupted business continuity. Backed by a global team of certified cloud experts, we provide round-the-clock consulting and support, ensuring a smooth and efficient digital transformation journey. Our cloud-managed services involve managing and maintaining functions such as infrastructure management, application support, data governance, and security. By leveraging these services, organizations can focus on their core business objectives while entrusting the complexity of cloud operations to experienced professionals.',
    order: 1,
  },
  {
    slug: 'managed-infrastructure-services',
    icon: 'fas fa-network-wired',
    title: 'Managed Infrastructure Services',
    category: 'Managed Services',
    tagline: 'Empowering Enterprises Through Intelligent Infrastructure Management',
    description:
      '24/7 monitoring and support form a fundamental component of modern cloud-managed services — continuous oversight combined with uninterrupted access to expert assistance.',
    fullDescription:
      '24/7 Monitoring and Support. Round-the-clock monitoring and support form a fundamental component of modern cloud-managed services. This capability ensures continuous oversight of an organization’s IT environment, combined with uninterrupted access to expert assistance whenever required. The monitoring function involves real-time tracking of system performance, availability, and overall health, along with proactive identification and mitigation of potential security threats. This continuous vigilance enables rapid issue detection and resolution, minimizing downtime and ensuring systems operate at optimal efficiency. Equally critical is our support function, which provides access to a dedicated team of skilled professionals available 24/7. This team delivers comprehensive assistance, including troubleshooting technical issues, offering best-practice guidance, and supporting the deployment and integration of new technologies. Together, these capabilities provide organizations with confidence and peace of mind, knowing their IT infrastructure is consistently monitored and supported by experts. Our operations are powered by secure, customizable, and industry-standard support tools, ensuring both reliability and transparency. Clients have real-time access to detailed SLA reports and case information through our platform at any time.',
    order: 2,
  },
  {
    slug: 'managed-security-services',
    icon: 'fas fa-shield-alt',
    title: 'Managed Security Services',
    category: 'Managed Services',
    tagline: 'Proactive security management that safeguards your digital assets with real-time intelligence and expert oversight',
    description:
      'Continuous security operations, including 24/7 monitoring, vulnerability management, and proactive threat detection and response.',
    fullDescription:
      'Managed Security Services have become increasingly critical as organizations navigate a rapidly evolving threat landscape alongside growing operational constraints. The rise in sophisticated cyber threats, overwhelming volumes of security alerts, stringent compliance requirements, and a shortage of skilled cybersecurity professionals make it difficult for organizations to effectively protect their digital assets. Our managed security offering addresses these challenges by delivering continuous security operations, including 24/7 monitoring, vulnerability management, and proactive threat detection and response. This enables organizations to enhance their security posture while avoiding significant investments in internal resources. Additionally, we bring specialized expertise that accelerates threat remediation, ensures adherence to regulatory standards, and provides immediate access to advanced security capabilities—allowing organizations to remain resilient in an increasingly complex cybersecurity environment.',
    features: [
      { title: 'Advanced Firewall Protection', description: 'Continuous monitoring and intelligent traffic analysis ensure real-time threat detection and rapid response.' },
      { title: 'Intelligent Intrusion Prevention', description: 'Advanced monitoring of users, devices, and systems helps prevent unauthorized access and internal risks.' },
      { title: 'Secure Remote Access', description: 'Secure, encrypted access for authorized users reduces exposure and strengthens network protection.' },
      { title: 'Proactive Risk Assessment', description: 'Proactive identification of system weaknesses enables timely remediation before exploitation.' },
      { title: 'Continuous Security Monitoring', description: '24/7 oversight through dedicated SOCs ensures rapid detection and incident response.' },
      { title: 'Managed Threat Detection & Response', description: 'Real-time threat detection and response powered by advanced tools and expert analysis.' },
    ],
    order: 3,
  },
  {
    slug: 'multi-cloud-hybrid-cloud-managed-services',
    icon: 'fas fa-cloud',
    title: 'Multi-Cloud/Hybrid Cloud Managed Services',
    category: 'Managed Services',
    tagline: 'Seamless management of multi-cloud environments to deliver agility, performance, and cost efficiency',
    description:
      'A multi-cloud strategy enables organizations to leverage a combination of public and private cloud platforms to create a flexible, cost-efficient, and high-performing IT environment.',
    fullDescription:
      'A multi-cloud strategy enables organizations to leverage a combination of public and private cloud platforms to create a flexible, cost-efficient, and high-performing IT environment—while maintaining control over their primary cloud providers. In many cases, multi-cloud adoption evolves organically, as different business units select solutions tailored to their specific needs in the absence of centralized governance. As a result, a structured multi-cloud approach becomes essential to unify and optimize these environments. Adopting a multi-cloud model offers several advantages, including increased agility, reduced dependency on a single vendor, access to specialized services, improved cost optimization, and the ability to meet data sovereignty and regulatory requirements. However, designing and managing a multi-cloud ecosystem requires a high level of technical expertise due to its inherent complexity. To ensure successful implementation and optimization, organizations often rely on experienced professionals with certifications across leading cloud platforms. We support your complete multi-cloud journey—from strategy design and architecture to deployment and ongoing management—while also addressing administrative and compliance considerations to ensure a seamless and efficient transformation. Our end-to-end managed service approach covers every stage of your multi-cloud journey—beginning with the development of a well-defined strategy and roadmap, followed by seamless deployment, ongoing management of your multi-cloud environment, and continuous optimization to maximize performance and efficiency.',
    order: 4,
  },
  {
    slug: 'cloud-migration-services',
    icon: 'fas fa-cloud-upload-alt',
    title: 'Cloud Migration Services',
    category: 'Infrastructure Modernisation',
    tagline: 'Seamless cloud migration services that securely transition your workloads while optimizing performance, scalability, and cost efficiency',
    description:
      'Cloud migration involves the seamless transition of applications, data, and workloads from on-premises infrastructure or legacy systems to modern cloud environments.',
    fullDescription:
      'As organizations accelerate their digital transformation journeys, migrating to the cloud has become a strategic priority for achieving scalability, flexibility, and operational efficiency. Cloud migration involves the seamless transition of applications, data, and workloads from on-premises infrastructure or legacy systems to modern cloud environments. A successful migration requires careful planning, the right architecture, and a deep understanding of business and technical dependencies. Whether it is rehosting (lift-and-shift), replatforming, or full application modernization, each approach must align with organizational goals, performance requirements, and compliance standards. When executed effectively, cloud migration enables improved agility, optimized costs, enhanced security, and faster time-to-market. Our cloud migration services are designed to simplify this complex journey and ensure a smooth, risk-mitigated transition. We begin with a comprehensive assessment of your existing IT landscape to define a clear migration strategy and roadmap tailored to your business needs. Our experts then design and implement the most suitable cloud architecture, ensuring minimal disruption to ongoing operations. We leverage proven methodologies, automation tools, and best practices to accelerate migration timelines while maintaining data integrity and system performance. Throughout the process, we prioritize security, governance, and compliance to ensure your environment is fully protected. Beyond migration, we provide continuous optimization and support to help you maximize the value of your cloud investment. From performance tuning and cost management to ongoing monitoring and management, we ensure your cloud environment remains efficient, resilient, and future-ready. With our expertise, you can transition to the cloud with confidence—reducing complexity, minimizing risk, and unlocking the full potential of a modern, scalable IT infrastructure.',
    order: 5,
  },
  {
    slug: 'modernization',
    icon: 'fas fa-sync-alt',
    title: 'Modernization',
    category: 'Infrastructure Modernisation',
    tagline: 'Unlock Greater Business Value Through Strategic Cloud Modernization',
    description:
      'Cloud modernization is a continuous process of improving applications, data, and infrastructure to fully leverage cloud-native capabilities.',
    fullDescription:
      'Completing a cloud migration is a significant milestone, but it represents only the beginning of a broader digital transformation journey. True value is realized through cloud modernization, which focuses on enhancing performance, scalability, and innovation within the cloud environment. Cloud modernization is a continuous process of improving applications, data, and infrastructure to fully leverage cloud-native capabilities. Unlike a basic migration approach, it involves more advanced transformations such as replatforming, refactoring, and rearchitecting to align with modern technology standards. While migration focuses on transitioning workloads from on-premises systems to the cloud, modernization is an ongoing effort that delivers sustained and measurable business outcomes through continuous improvement. Although application modernization is often a key focus, a comprehensive cloud modernization strategy extends beyond this to include database modernization, infrastructure automation, and operational transformation. Our cloud modernization services are designed to help organizations unlock the full value of their cloud investments. We begin with a detailed assessment of your existing environment to identify modernization opportunities and define a strategic roadmap aligned with your business objectives. Whether it involves refactoring legacy applications, optimizing workloads, or transitioning to cloud-native architectures, we tailor our approach to meet your unique requirements. Our experts utilize industry best practices and advanced tools to execute modernization initiatives with minimal disruption. We ensure seamless integration, robust security, and compliance throughout the transformation process. By incorporating automation and continuous delivery pipelines, we enable faster innovation and improved operational agility. With our cloud modernization expertise, you can transform legacy systems into intelligent, high-performing platforms that support long-term growth and digital innovation.',
    order: 6,
  },
  {
    slug: 'disaster-recovery-services',
    icon: 'fas fa-life-ring',
    title: 'Disaster Recovery Services',
    category: 'Infrastructure Modernisation',
    tagline: 'Resilient disaster recovery solutions designed to ensure rapid recovery, minimal downtime, and uninterrupted business continuity',
    description:
      'Cloud-based DR platforms provide a more efficient and scalable approach, enabling faster recovery, reduced data loss, and improved risk distribution.',
    fullDescription:
      "Business continuity is critical in today’s digital landscape, where even brief disruptions can result in significant financial and operational impact. Organizations operating in the cloud can greatly benefit from a well-defined and structured Disaster Recovery (DR) strategy, ensuring rapid restoration of systems and services in the event of failures or cyber incidents. Traditional on-premises disaster recovery solutions are often costly and complex to maintain. Cloud-based platforms provide a more efficient and scalable approach, enabling faster recovery, reduced data loss, and improved risk distribution across environments—while ensuring critical applications and data remain protected. An effective DR strategy requires a thorough understanding of your IT landscape, along with the right tools and expertise to enable rapid backup and recovery. With the right approach, organizations can minimize downtime and maintain operational resilience. We help businesses design and implement robust disaster recovery strategies that ensure business continuity, optimize recovery time, and safeguard critical workloads in the cloud. We support organizations in designing tailored disaster recovery (DR) strategies and ensure they can be activated seamlessly whenever required. Our flexible DR solutions are customized to meet specific business needs, offering multiple deployment options. These include backup and restore models for data recovery during disruptions, maintaining a fully replicated standby environment with real-time data synchronization, running critical services in standby mode with the ability to scale additional services on demand, or deploying a fully operational secondary production environment ready to take over instantly.",
    order: 7,
  },
  {
    slug: 'devops-automation-services',
    icon: 'fas fa-infinity',
    title: 'DevOps Automation Services',
    category: 'Infrastructure Modernisation',
    tagline: 'Streamlining software delivery through intelligent DevOps automation for faster releases, greater reliability, and improved operational efficiency',
    description:
      'Accelerate your DevOps journey with advanced automation services designed to streamline processes, strengthen collaboration, and enhance delivery quality.',
    fullDescription:
      'Accelerate your DevOps journey with our advanced automation services, designed to streamline processes, strengthen collaboration, and enhance delivery quality. From continuous integration and continuous deployment (CI/CD) to infrastructure automation, our specialists help optimize software development lifecycles, minimize manual intervention, and shorten time-to-market. We provide a fully managed DevOps automation framework that simplifies deployments, improves system stability, and maximizes cloud performance. By automating critical workflows, we reduce operational complexity, increase efficiency, and ensure consistent security and compliance across your cloud environment. Gain a structured and results-driven roadmap for your DevOps transformation with expert consulting that aligns people, processes, and technology to enable faster and more reliable software delivery.',
    features: [
      { title: 'CI/CD Pipeline Automation', description: 'Streamline build and deployment processes through automated pipelines, enabling faster, more reliable releases while maintaining high code quality and minimizing downtime.' },
      { title: 'Infrastructure Automation & Provisioning', description: 'Leverage Infrastructure as Code (IaC) to automate resource provisioning, ensuring consistency, scalability, and reduced operational risk across cloud environments.' },
      { title: 'IT Environment Assessment', description: 'Identify inefficiencies and opportunities to streamline workflows and improve performance.' },
      { title: 'Business Alignment', description: 'Evaluate organizational objectives to develop a customized DevOps strategy.' },
      { title: 'KPI Definition & Cost Planning', description: 'Establish relevant metrics and provide clear estimates for implementation and adoption.' },
      { title: 'Readiness Assessment', description: 'Analyse project preparedness and recommend the most suitable DevOps approach.' },
      { title: 'Maturity Evaluation', description: 'Assess current DevOps capabilities to benchmark progress and identify improvement areas.' },
      { title: 'Team Enablement', description: 'Provide hands-on training and guidance to enhance in-house expertise and execution efficiency.' },
    ],
    order: 8,
  },
  {
    slug: 'cloud-cost-optimization',
    icon: 'fas fa-dollar-sign',
    title: 'Cloud Cost Optimization',
    category: 'Infrastructure Modernisation',
    tagline: 'Optimizing cloud spend through intelligent cost management, improved resource utilization, and continuous performance efficiency',
    description:
      'Cloud cost optimization focuses on minimizing cloud expenditure while maintaining or even enhancing system performance and reliability.',
    fullDescription:
      'Cloud cost optimization focuses on minimizing cloud expenditure while maintaining or even enhancing system performance and reliability. The objective is to align spending with actual usage by eliminating inefficiencies such as overprovisioned resources, idle instances, and suboptimal architectures. It requires a careful balance between cost control and ensuring sufficient resources to support performance, scalability, security, and compliance requirements. As cloud environments and pricing models continuously evolve, cost optimization is an ongoing process that relies on detailed insights, analytics, and automation to remain effective. An effective cloud cost optimization strategy enables organizations to achieve significant cost savings, improve operational efficiency, enhance budgeting accuracy, and maintain optimal performance and business continuity. We support organizations in defining and implementing a robust optimization framework aligned with industry best practices.',
    features: [
      { title: 'Strategic Cloud Procurement', description: 'Effective governance ensures cloud investments are aligned with business needs through budget controls, regular cost reviews, and cost-saving mechanisms such as reserved instances and volume-based discounts.' },
      { title: 'Efficient Resource Utilization', description: 'Continuous monitoring, automation, and periodic optimization reviews ensure resources are appropriately sized for each workload — maximizing efficiency while minimizing waste.' },
      { title: 'Cost Analysis and Billing Insights', description: 'We help interpret detailed cloud billing data to identify high-cost areas and anomalies across compute, storage, and managed services.' },
      { title: 'Budget Planning and Governance', description: 'We assist in establishing structured budgets and governance policies, aligning IT and finance teams with business objectives.' },
      { title: 'Cloud-Native Optimization', description: 'We guide organizations in adopting cloud-native architectures to fully leverage the benefits of the cloud and reduce unnecessary resource consumption.' },
      { title: 'Identification of Idle Resources', description: 'We identify underutilized or unused compute instances, storage volumes, and subscriptions generating unnecessary costs.' },
      { title: 'Resource Rightsizing', description: 'Continuous monitoring and performance analysis ensure cloud resources are appropriately sized for each workload, improving efficiency without impacting performance.' },
    ],
    order: 9,
  },
  {
    slug: 'backup-as-a-service',
    icon: 'fas fa-archive',
    title: 'Backup as a Service (BaaS)',
    category: 'Infrastructure Modernisation',
    tagline: 'Secure your data. Simplify your backups. Stay always protected',
    description:
      'A cloud-based solution that allows organizations to delegate the management of backup and recovery operations to a specialized service provider.',
    fullDescription:
      "Backup as a Service (BaaS) is a cloud-based solution that allows organizations to delegate the management of backup and recovery operations to a specialized service provider. It encompasses data storage, backup infrastructure, security, monitoring, ongoing maintenance, and efficient data restoration. With BaaS, businesses leverage the provider’s cloud platform to securely manage and protect their data, ensuring reliability and scalability. Organizations can choose from different levels of service based on their needs: a Fully Managed Model, where the service provider takes complete responsibility for backup and recovery operations, or a Partially Managed Model, where the organization retains control over backup and restore processes while the provider manages the underlying infrastructure.",
    features: [
      { title: 'Data Identification', description: 'We help determine which data assets require backup—ranging from files and folders to complex databases, virtual machines, and critical applications.' },
      { title: 'Backup Planning', description: 'Backup schedules are designed based on data criticality and recovery objectives, ensuring alignment with defined recovery point objectives (RPOs).' },
      { title: 'Secure Data Transfer & Storage', description: 'Selected data is securely transmitted to cloud-based infrastructure and stored within highly resilient and redundant environments.' },
      { title: 'Data Restoration', description: 'In the event of data loss, corruption, or cyber incidents, recovery can be initiated quickly through a centralized platform, restoring data to its original or alternate location.' },
    ],
    order: 10,
  },
  {
    slug: 'generative-ai-services',
    icon: 'fas fa-brain',
    title: 'Generative AI Services',
    category: 'Data, Analytics & AI',
    tagline: 'Transform Ideas into Intelligence with Generative AI',
    description:
      'Generative AI empowers organizations to operate with greater speed, intelligence, and creativity through secure, compliant, enterprise-ready solutions.',
    fullDescription:
      'Generative AI empowers organizations to operate with greater speed, intelligence, and creativity. Our approach focuses on delivering practical, enterprise-ready solutions that drive real business value. From initial pilots to full-scale deployment, our GenAI solutions are secure, compliant, and built for scalability—seamlessly integrating with your existing technology stack while providing measurable outcomes. We deliver customized Generative AI solutions that enable organizations to improve decision-making, streamline operations, and foster innovation. From bespoke model development to smooth integration and scalable deployment, we help businesses realize the full value of AI. Through a structured and strategic approach, we help organizations identify high-value AI opportunities and validate them efficiently. Our focus is on enabling faster, informed adoption of AI by prioritizing impactful use cases and accelerating implementation. We support businesses with prioritized use case mapping, helping them evaluate and rank AI opportunities based on business impact, technical feasibility, and expected ROI. Using advanced generative AI tools, we enable rapid prototyping to test and validate ideas with minimal risk before scaling to full production. Additionally, by leveraging prompt engineering and contextual data processing, we help organizations generate real-time, actionable insights that enhance decision-making and drive better outcomes. We also have Gen AI solutions built for production in areas like advanced chatbots, intelligent document processing solutions, recommendation engines, voice recognition, image and video analytics, and call analysis.',
    order: 11,
  },
  {
    slug: 'data-and-analytics',
    icon: 'fas fa-chart-line',
    title: 'Data and Analytics',
    category: 'Data, Analytics & AI',
    tagline: 'Transforming Data into Competitive Advantage',
    description:
      'Unlock the true value of your enterprise data to drive innovation, streamline operations, and gain a competitive advantage.',
    fullDescription:
      'Unlock the true value of your enterprise data to drive innovation, streamline operations, and gain a competitive advantage. From data platforms to advanced machine learning capabilities, we enable organizations to transform raw data into meaningful, business-driven insights—delivered faster, smarter, and at scale. We support organizations in building intelligent data foundations, enabling accurate forecasting and predictive insights, and scaling machine learning operations across the enterprise. Our expertise also extends to modernizing data architectures for business intelligence, where we design and optimize scalable data ecosystems that deliver actionable insights. From data lakes to advanced visualization platforms, we help establish robust data pipelines and seamlessly integrate diverse data sources—empowering more informed decision-making and enhanced analytics capabilities. We enable organizations to achieve precise forecasting through intelligent models powered by comprehensive historical data. By leveraging predictive insights, businesses can enhance operational efficiency, improve customer experiences, and optimize resource planning.',
    features: [
      { title: 'Comprehensive Data Infrastructure', description: 'Design and implement modern data ecosystems—including data lakes, lake houses, data marts, and warehouses—capable of managing both structured and unstructured data at scale.' },
      { title: 'Seamless Data Integration', description: 'Develop efficient data pipelines and integrate multiple data sources, including databases, IoT systems, and streaming platforms, while optimizing ETL processes to ensure high-quality, reliable data.' },
      { title: 'Advanced Analytics & Visualization', description: 'Leverage powerful business intelligence tools to enable deep analytics, generate actionable insights, and support data-driven decision-making.' },
    ],
    order: 12,
  },
  {
    slug: 'machine-learning-services',
    icon: 'fas fa-robot',
    title: 'Machine Learning (ML) Services',
    category: 'Data, Analytics & AI',
    tagline: 'Smarter Models. Smarter Decisions.',
    description:
      'We enable organizations to enhance decision-making through scalable and efficient machine learning operations.',
    fullDescription:
      'We enable organizations to enhance decision-making through scalable and efficient machine learning operations. By leveraging advanced ML tools, automated pipelines, and enterprise-grade infrastructure, we simplify the process of building, deploying, and managing models at scale.',
    features: [
      { title: 'Pre-Configured ML Environments', description: 'Utilize collaborative development platforms equipped with built-in algorithms, pre-trained models, and modern frameworks to accelerate innovation.' },
      { title: 'Automated Model Lifecycle Management', description: 'Implement CI/CD-driven workflows to train, update, and deploy machine learning models seamlessly, ensuring speed, consistency, and agility.' },
      { title: 'Comprehensive Model Governance', description: 'Manage the complete model lifecycle with version control, performance monitoring, and lineage tracking to maintain accuracy, reliability, and quality.' },
    ],
    order: 13,
  },
  {
    slug: 'application-development',
    icon: 'fas fa-laptop-code',
    title: 'Application Development',
    category: 'Application Modernisation',
    tagline: 'Building cloud-native, scalable applications for the modern enterprise',
    description:
      'Cloud-native applications are specifically designed for cloud environments, leveraging microservices architectures to enable continuous delivery.',
    fullDescription:
      "As organizations embrace digital transformation and scale their operations, it becomes evident that traditional application development approaches cannot keep pace with the speed and flexibility offered by the cloud. Cloud-native applications are specifically designed for cloud environments, leveraging microservices architectures to enable continuous delivery through automation and orchestration. Developing innovative, cloud-first applications requires specialized expertise in scalable design, agile development practices, and modern architectural frameworks. From mobile and web applications to e-commerce platforms and content management systems, we deliver end-to-end cloud application development and serverless solutions. By analysing user behaviour, we design intuitive, secure, and high-performance applications that drive engagement and adoption. Our approach focuses on building resilient, scalable, and responsive cloud-native applications using event-driven architectures and microservices—ensuring flexibility, reliability, and future-ready performance. We empower organizations to achieve agile application development through cloud-based architectures, iterative delivery models, standardized design patterns, and CI/CD pipelines that accelerate innovation and responsiveness. Our DevOps automation capabilities enhance operational efficiency by streamlining source control, release management, infrastructure provisioning, and performance monitoring. We support the adoption of microservices architectures powered by serverless technologies, enabling independent deployments, improved scalability, and optimized costs. By leveraging containerization and serverless computing alongside the elasticity and automation of AWS, we enable rapid deployments while significantly reducing infrastructure overhead and complexity.",
    order: 14,
  },
  {
    slug: 'application-modernisation',
    icon: 'fas fa-cubes',
    title: 'Application Modernisation',
    category: 'Application Modernisation',
    tagline: 'Driving Application Transformation through Cloud-Native and Containerized Innovation',
    description:
      'Application modernisation transforms legacy systems into scalable, cloud-native applications that reduce costs, technical debt, and drive innovation.',
    fullDescription:
      'Many businesses struggle with outdated, monolithic applications that are expensive to maintain, hard to scale, and slow to adapt to evolving market demands. Legacy systems create inefficiencies, limit agility, and hinder innovation, making it difficult to meet customer expectations for innovation, productivity, and cost-savings. Application modernisation solves these issues by transforming legacy systems into scalable, cloud-native applications that reduce costs, technical debt, improve performance, and drive innovation. Our modernisation approach and specialised expertise help build scalable and secure cloud-native applications with agile methodologies. In the initial phase, we evaluate modernization feasibility by analysing your application portfolio and cloud readiness, enabling the creation of a structured roadmap for migration and modernization. We then facilitate the transition to containerized environments by applying the most suitable migration strategy for your applications. Finally, we support your shift to cloud-native architectures by modernizing legacy systems, enhancing scalability, flexibility, and overall performance. We enable organizations to realize the benefits of application modernization by transforming legacy systems and integrating modern technologies to enhance resilience, efficiency, and agility. This approach accelerates deployment cycles, reduces operational costs, and delivers improved return on investment.',
    order: 15,
  },
]

const solutions: SolutionSeed[] = [
  {
    slug: 'smb-in-a-box',
    icon: 'fas fa-box-open',
    tag: 'All-in-One',
    title: 'SMB-in-a-Box',
    tagline: 'From setup to success—everything SMBs need in one place',
    description:
      'A comprehensive, all-in-one offering designed to equip small and medium businesses with everything they need to operate, grow, and scale.',
    fullDescription:
      'Our SMB solution suite provides a comprehensive set of integrated workspaces designed to simplify and streamline day-to-day business operations. It brings together essential business functions into a unified platform, including Sales CRM, Project Management, Account Management & Support, Finance, and Human Resources. Our SMB-in-a-Box solution is a comprehensive, all-in-one offering designed to equip small and medium businesses with everything they need to operate, grow, and scale—without the complexity of managing multiple vendors. Delivered through a flexible per-user pricing model, it combines essential business tools, cloud infrastructure, and expert support into a single, streamlined package. At the core of the solution is a robust ERP system, enabling organizations to manage finance, operations, inventory, and reporting efficiently. Complementing this, we provide Microsoft Office licenses to empower teams with industry-leading productivity and collaboration tools for seamless day-to-day operations. To strengthen customer engagement, the package includes an integrated CRM platform that helps businesses manage leads, track interactions, and build lasting customer relationships. Additionally, we take care of your digital presence with website hosting and domain registration, ensuring your business is always accessible, secure, and professionally represented online. Beyond technology, our offering includes professional services to support implementation, configuration, and onboarding—ensuring a smooth transition with minimal disruption. This is backed by one year of dedicated support, giving you access to expert assistance, issue resolution, and continuous guidance as your business evolves. With our SMB-in-a-Box solution, you get a fully managed, scalable, and cost-effective foundation to run your business—so you can focus on growth while we handle the technology.',
    order: 1,
  },
  {
    slug: 'web-hosting-launch-kit',
    icon: 'fas fa-globe',
    tag: 'Hosting',
    title: 'Web Hosting Launch Kit',
    tagline: 'From Zero to Online—Made Simple',
    description:
      'A secure, scalable, and fully managed hosting environment designed specifically for new and growing businesses.',
    fullDescription:
      "Launch your digital presence with confidence using our Web Hosting Starter Kit, designed specifically for new and growing businesses. We provide a secure, scalable, and fully managed hosting environment so you can focus on what matters most, that is building your business. Our solution ensures secure access and advanced data encryption, safeguarding your website and sensitive information against evolving cyber threats. With end-to-end managed infrastructure services, you don’t have to worry about server maintenance, performance optimization, or system updates—we handle it all for you. The package includes professional database management and reliable email support, ensuring seamless communication and efficient data handling for your operations. Whether you're running a simple website or a more complex application, our hosting environment is built to support both. Our starter kit is optimized to handle static and dynamic content, powered by a dedicated server environment and robust SQL database provisioning. This ensures high performance, reliability, and flexibility as your business grows. In addition, we offer the flexibility for customers to choose their preferred cloud service provider for hosting their websites. With our Web Hosting Starter Kit, you get a complete, worry-free hosting solution—secure, efficient, and ready to scale with your success.",
    order: 2,
  },
  {
    slug: 'dr-jumpstart-bundle',
    icon: 'fas fa-life-ring',
    tag: 'Resilience',
    title: 'DR Jumpstart Bundle',
    tagline: 'Your Safety Net in a Digital World',
    description:
      'A reliable, fully managed recovery environment with a guaranteed RTO of 30 minutes and RPO of 15 minutes.',
    fullDescription:
      'Ensure your business stays resilient and always available with our Disaster Recovery Solution, purpose-built for new and growing organizations. We provide a reliable, fully managed recovery environment that safeguards your critical systems and data against unexpected disruptions. Our solution includes a fully managed replication server designed to maintain real-time data synchronization, supported by continuous monitoring alerts and comprehensive audit logging. We deliver a robust infrastructure stack, including a secure operating system with Windows application server and a fully managed database server, allowing your applications and data to be protected and recoverable at all times. With a guaranteed Recovery Time Objective (RTO) of 30 minutes and Recovery Point Objective (RPO) of 15 minutes, your business can quickly recover operations with minimal downtime and data loss. Stay protected. Stay operational. Stay ahead.',
    order: 3,
  },
  {
    slug: 'backup-solution-kit',
    icon: 'fas fa-archive',
    tag: 'Backup',
    title: 'Backup Solution Kit',
    tagline: 'Protect What Matters, Effortlessly',
    description:
      'Secure, scalable, and fully managed backup services replacing the limitations of physical tape libraries.',
    fullDescription:
      'Modernize your data protection strategy with our Cloud Backup Solution Kit, designed to deliver secure, scalable, and fully managed backup services for businesses of all sizes. Say goodbye to the limitations of physical tape libraries and embrace a more efficient, reliable, and cost-effective approach to data backup and archiving. Our solution replaces traditional backup infrastructure with virtual tape systems hosted in the cloud. Security and compliance are at the core of our offering — your backups meet industry standards such as HIPAA and PCI compliance. The Cloud Backup Solution Kit offers flexible storage options, including high-performance hot storage for frequently accessed data and cost-effective archival storage for long-term retention. Delivered as a fully managed service, our experts handle setup, monitoring, maintenance, and optimization. Simplify backup. Strengthen security. Stay compliant.',
    order: 4,
  },
  {
    slug: 'database-starter-kit',
    icon: 'fas fa-database',
    tag: 'Data',
    title: 'Database Starter Kit',
    tagline: 'Databases Made Simple—We Handle the Rest',
    description:
      'Seamless Greenfield cloud database deployment with minimal downtime and zero disruption to your operations.',
    fullDescription:
      "Build a strong data foundation for your business with our Database Starter Kit, designed to enable seamless Greenfield cloud database deployment with minimal downtime and zero disruption to your operations. We offer flexible packages tailored to your business needs, allowing you to choose from small-scale databases, mid-size in-memory databases, or high-performance enterprise-grade databases. Our solution is ideal for SMBs and growing enterprises, with support for business applications such as SAP Business One (SAP B1) and other database-driven platforms. We provide a robust setup that includes RDS deployment with built-in redundancy, ensuring high availability and reliability for your critical data. Key features include automated volume backups, high-speed data transfer capabilities, and comprehensive audit logging. Delivered as a fully managed service, our team handles everything from deployment and configuration to monitoring and optimization. Start strong. Scale smart. Manage less.",
    order: 5,
  },
  {
    slug: 'storage-kit-for-smbs',
    icon: 'fas fa-hdd',
    tag: 'Storage',
    title: 'Storage Kit for SMBs',
    tagline: 'Secure, scalable, fully managed cloud storage for growing businesses',
    description:
      'A reliable platform for storing and managing your static files in the cloud, with easy access, high availability, and seamless scalability.',
    fullDescription:
      "Empower your business with a secure, scalable, and fully managed Cloud Storage Solution Kit, designed specifically for small and medium-sized businesses. Our solution provides a reliable platform for storing and managing your static files in the cloud, ensuring easy access, high availability, and seamless scalability as your business grows. Delivered as a fully managed service, we handle the complete setup, configuration, and ongoing management of your cloud storage environment. Our solution offers flexible storage options, with support for up to 200 file scans per hour, continuously monitoring your stored data to detect and mitigate potential threats. To further strengthen security, the package includes Trend Micro Cloud One, delivering one of the most comprehensive cloud security solutions available. Store smarter. Secure better. Scale effortlessly.",
    order: 6,
  },
  {
    slug: 'bi-solution-kit',
    icon: 'fas fa-chart-pie',
    tag: 'Analytics',
    title: 'Business Intelligence (BI) Solution Kit',
    tagline: 'Unlock the full potential of your data',
    description:
      'Scalable, subscription-based analytics that let you visualize data, generate actionable insights, and collaborate seamlessly.',
    fullDescription:
      'Unlock the full potential of your data with our Cloud Business Intelligence (BI) Solutions, designed to provide scalable, subscription-based analytics for modern businesses. Our platform enables organizations to visualize data, generate actionable insights, and collaborate seamlessly—from anywhere, at any time. We offer the flexibility to choose from leading BI platforms, empowering your business with real-time data integration, automated reporting, and AI-driven insights. By moving to the cloud, you can significantly reduce IT overhead while gaining a more agile and cost-effective analytics environment compared to traditional on-premises systems. Turn data into insight. Insight into action.',
    features: [
      { title: 'Data Integration Layer', description: 'We connect and consolidate data from multiple sources, including ERP systems, CRM platforms, spreadsheets, APIs, and IoT devices, ensuring a unified and reliable data ecosystem.' },
      { title: 'Data Storage & Modeling', description: 'Leverage cloud data warehouses and data lakes to store and manage large volumes of data efficiently, with flexible schema-on-read and semantic modeling.' },
      { title: 'Analytics & Visualization', description: 'Transform raw data into meaningful insights through interactive dashboards, visual reports, and embedded analytics.' },
    ],
    order: 7,
  },
]

async function run() {
  const { getPayload } = await import('payload')
  const configPath = pathToFileURL(path.resolve(dirname, '../src/payload.config.ts')).href
  const config = (await import(configPath)).default
  const payload = await getPayload({ config })

  console.log(`Seeding ${services.length} services...`)
  for (const svc of services) {
    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: svc.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection: 'services', id: existing.docs[0].id, data: svc as any })
      console.log(`  updated: ${svc.title}`)
    } else {
      await payload.create({ collection: 'services', data: svc as any })
      console.log(`  created: ${svc.title}`)
    }
  }

  console.log(`Seeding ${solutions.length} solutions...`)
  for (const sol of solutions) {
    const existing = await (payload as any).find({
      collection: 'solutions',
      where: { slug: { equals: sol.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await (payload as any).update({ collection: 'solutions', id: existing.docs[0].id, data: sol })
      console.log(`  updated: ${sol.title}`)
    } else {
      await (payload as any).create({ collection: 'solutions', data: sol })
      console.log(`  created: ${sol.title}`)
    }
  }

  console.log('Done.')
  process.exit(0)
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
