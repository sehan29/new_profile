export const portfolioData = {
  name: 'Sehan Hansaja Gamage',
  shortName: 'Sehan',
  role: 'Software Engineer',
  location: 'Colombo, Sri Lanka',
  availability: 'Open to software engineering opportunities',
  email: 'sehanhansu@gmail.com',
  phone: '+94 70 287 6795',
  website: 'https://www.sehandeveloper.tech',
  linkedin: 'https://www.linkedin.com/in/sehan-gamage-498350287/',
  github: 'https://github.com/sehan29',
  profileImage: '/profile.PNG',
  heroStatement:
    'I build intelligent, scalable and human-centered software across web, mobile, AI and IoT.',
  about:
    'Information and Communication Technology graduate from the University of Colombo with hands-on software engineering experience at Sri Lanka Telecom. I enjoy turning complex requirements into reliable products, combining strong backend engineering with thoughtful interfaces and emerging technologies.',
  stats: [
    { value: '10+', label: 'Projects built' },
    { value: '8+', label: 'Core technologies' },
    { value: '3.71', label: 'Final CGPA' },
    { value: '4', label: 'Product domains' },
  ],
  focusAreas: [
    'Full-stack product engineering',
    'AI-powered applications',
    'Cloud-ready API development',
    'Mobile and IoT integration',
  ],
  skills: {
    Languages: ['C#', 'JavaScript', 'Python', 'Java', 'PHP', 'C', 'C++'],
    Frontend: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
    Backend: ['ASP.NET Core', 'Laravel', 'Node.js', 'FastAPI', 'REST APIs'],
    'Data & AI': ['MySQL', 'SQL Server', 'MongoDB', 'YOLOv8', 'XGBoost'],
    'Tools & Cloud': ['Git', 'Docker', 'Azure', 'Railway', 'Postman', 'GitHub Actions'],
  },
  projects: [
    {
      id: 'cropguard',
      title: 'CropGuard',
      subtitle: 'AI + IoT Smart Agriculture Platform',
      category: 'AI & IoT',
      year: '2026',
      impact: 'End-to-end multimodal diagnosis workflow',
      description:
        'An intelligent black pepper disease diagnosis platform combining computer vision, live sensor monitoring, root-cause analysis and recommendation generation.',
      details:
        'CropGuard connects a Flutter application, ASP.NET Core APIs, a FastAPI AI service and IoT sensor nodes. YOLOv8 identifies leaf diseases while XGBoost analyzes environmental and nutrient conditions to support root-cause analysis.',
      stack: ['Flutter', 'ASP.NET Core', 'FastAPI', 'YOLOv8', 'XGBoost', 'MySQL', 'IoT'],
      accent: 'violet',
      links: { demo: '#contact', code: '#' },
    },
    {
      id: 'slthub',
      title: 'SLT ChatHub',
      subtitle: 'Internal Communication Ecosystem',
      category: 'Web & Mobile',
      year: 'Completed',
      impact: 'Built during software engineering internship',
      description:
        'A communication solution developed during my internship at Sri Lanka Telecom, supported by an administrative management experience.',
      details:
        'The solution focused on practical internal communication workflows, authentication, maintainable application architecture and production-minded collaboration within a telecom engineering environment.',
      stack: ['Flutter', 'Laravel', 'MongoDB', 'WebSockets', 'Azure'],
      accent: 'cyan',
      links: { demo: '#contact', code: '#' },
    },
    {
      id: 'mercedes',
      title: 'Mercedes-Benz Report System',
      subtitle: 'Enterprise Reporting Workflow',
      category: 'Enterprise',
      year: 'Completed',
      impact: 'Digitized complex workshop reports',
      description:
        'A report management platform for Mercedes-Benz Sri Lanka covering service, inspection and conditional reporting workflows.',
      details:
        'The platform improved report creation, data availability and document generation while supporting integration-oriented enterprise workflows, including SAP-related requirements.',
      stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'PDF / Word'],
      accent: 'amber',
      links: { demo: '#contact', code: '#' },
    },
    {
      id: 'rice',
      title: 'Rice Distribution System',
      subtitle: 'Operations Management Platform',
      category: 'Full Stack',
      year: 'Completed',
      impact: 'Centralized distribution operations',
      description:
        'A full-stack system designed to manage rice distribution activities, operational records and business workflows.',
      details:
        'The project demonstrates structured API design, role-aware workflows, relational data modeling and a responsive user experience for day-to-day operational management.',
      stack: ['React', 'ASP.NET Core', 'SQL Server', 'REST API'],
      accent: 'green',
      links: { demo: '#contact', code: '#' },
    },
  ],
  experience: [
    {
      period: 'Feb 2025 — Aug 2025',
      role: 'Software Engineer Intern',
      company: 'Sri Lanka Telecom',
      description:
        'Contributed to internal digital products including SLT ChatHub, its administration experience and a Gate Pass Management System. Worked with real application requirements, collaboration and deployment-oriented engineering practices.',
      tags: ['Software Engineering', 'APIs', 'Mobile', 'Cloud'],
    },
    {
      period: '2021 — 2026',
      role: 'BICT (Honours)',
      company: 'University of Colombo — Faculty of Technology',
      description:
        'Completed an Information and Communication Technology degree with a final CGPA of 3.71, developing a broad foundation across software engineering, AI, databases, networking, IoT and research.',
      tags: ['CGPA 3.71', 'Research', 'Team Projects'],
    },
  ],
  certifications: [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services Academy',
      year: 'Completed',
      type: 'Cloud Computing',
    },
    {
      title: 'AWS Academy Data Engineering',
      issuer: 'Amazon Web Services Academy',
      year: 'Completed',
      type: 'Data Engineering',
    },
    {
      title: 'Foundational C# with Microsoft',
      issuer: 'Microsoft',
      year: 'Completed',
      type: 'Software Development',
    },
    {
      title: 'Programming in Python — Levels I & II',
      issuer: 'University of Moratuwa',
      year: 'Completed',
      type: 'Programming',
    },
    {
      title: 'Introduction to Azure Cloud Services',
      issuer: 'Microsoft Learn',
      year: 'Completed',
      type: 'Cloud Computing',
    },
  ],
};
