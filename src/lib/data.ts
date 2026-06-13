import {
  Bot, Code2, Smartphone, Cloud, GitBranch, TestTube2,
  Brain, Briefcase, Zap, Shield, Users, TrendingUp,
} from 'lucide-react'

export const siteConfig = {
  name: 'VersoTech Solutions',
  tagline: 'Empowering Modern Businesses with Intelligent Solutions Through AI & Automation',
  description: 'VersoTech Solutions delivers QA Automation, AI Solutions, Custom Software, Web & Mobile Apps, DevOps, Cloud, and IT Consulting.',
  url: '[versotech.com](https://versotech.com)',
  email: 'admin@versotechsolutions.com',
  phone: '+91 7397393985, +91 7397393986',
  whatsapp: ['917397393985','917397393986'],
  address: 'Anna nagar ,Chennai ,Tamilnadu, India',
}

export const services = [
  { icon: TestTube2, title: 'QA Automation', desc: 'End-to-end test automation frameworks with Selenium, Playwright, and Cypress for faster, reliable releases.' },
  { icon: Shield, title: 'Software Testing', desc: 'Manual and automated testing across functional, performance, security, and compatibility dimensions.' },
  { icon: Code2, title: 'Web Development', desc: 'Modern, scalable web applications built with React, Next.js, Node.js, and cloud-native architectures.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform iOS and Android apps using React Native, Flutter, and Swift.' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Custom ML models, LLM integrations, computer vision, and intelligent automation tailored to your domain.' },
  { icon: GitBranch, title: 'DevOps & CI/CD', desc: 'Automated pipelines, infrastructure as code, containerization, and continuous delivery workflows.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS, Azure, and GCP architecture, migration, optimization, and 24/7 managed cloud operations.' },
  { icon: Briefcase, title: 'IT Consulting', desc: 'Strategic technology consulting to align IT investments with business outcomes and digital transformation.' },
]

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '25+', label: 'Expert Engineers' },
  { value: '8+', label: 'Years of Excellence' },
]

export const whyChooseUs = [
  { icon: Zap, title: 'Speed & Agility', desc: 'Rapid delivery cycles powered by automation and lean engineering practices.' },
  { icon: Shield, title: 'Enterprise Quality', desc: 'ISO-grade processes, security-first architecture, and rigorous QA at every stage.' },
  { icon: Brain, title: 'AI-First Mindset', desc: 'We embed intelligence into every solution — from automation to analytics.' },
  { icon: Users, title: 'Dedicated Teams', desc: 'Senior engineers committed to your success, not just your ticket queue.' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Measurable outcomes: faster releases, lower costs, higher reliability.' },
  { icon: Bot, title: '24/7 Support', desc: 'Always-on monitoring and rapid-response engineering coverage.' },
]

export const testimonials = [
  { name: 'Priya Menon', role: 'CTO, FinEdge Capital', quote: 'VersoTech automated our entire regression suite. Release cycles dropped from 3 weeks to 3 days.', rating: 5 },
  { name: 'David Lin', role: 'VP Engineering, RetailWave', quote: 'Their AI Test Assistant cut our QA effort by 60%. The team is sharp, responsive, and genuinely partner-minded.', rating: 5 },
  { name: 'Anita Rao', role: 'Founder, MedAssist AI', quote: 'From cloud architecture to mobile delivery, VersoTech has been our trusted engineering arm for two years.', rating: 5 },
]

export const products = [
  {
    name: 'VersoTech ShiftAttend',
    tagline: 'Attendance & Shift Management Platform',
    desc: 'A modern workforce management platform with geo-fenced attendance, automated shift scheduling, payroll integration, and real-time analytics.',
    features: ['Geo-fenced biometric attendance', 'Drag-and-drop shift scheduling', 'Automated payroll exports', 'Leave & overtime workflows', 'Mobile app for employees', 'Real-time dashboards & reports'],
    benefits: ['Reduce admin time by 70%', 'Eliminate buddy punching', 'Compliance-ready audit trails', 'Scale from 10 to 10,000 employees'],
  },
  {
    name: 'AI Test Assistant',
    tagline: 'AI-powered QA automation platform',
    desc: 'Generate, maintain, and execute automated tests using natural language. Self-healing scripts, visual regression, and intelligent test prioritization.',
    features: ['Natural language test authoring', 'Self-healing locators', 'Visual AI regression', 'CI/CD pipeline integration', 'Cross-browser & device cloud', 'Risk-based test prioritization'],
    benefits: ['Cut test creation time by 80%', 'Reduce flaky tests dramatically', 'Faster feedback in CI', 'Lower QA total cost of ownership'],
  },
]

export const portfolio = [
  {
    title: 'E-commerce Automation Framework',
    overview: 'Enterprise-grade Selenium + Playwright framework for a multi-region e-commerce platform serving 5M+ users.',
    stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'Docker', 'AWS'],
    challenges: 'Fragmented tests across 12 microservices, 8-hour regression runs, flaky checkout flows.',
    solutions: 'Built a unified hybrid framework with parallel execution, smart waits, and self-healing locators integrated into the CI pipeline.',
    results: 'Regression time cut from 8h to 45min. Bug escape rate reduced by 62%. 40+ engineers onboarded to the framework.',
  },
  {
    title: 'Shift Attendance Management System',
    overview: 'End-to-end workforce platform for a logistics enterprise with 12,000+ field workers.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'React Native', 'AWS'],
    challenges: 'Manual paper-based attendance, payroll disputes, no real-time visibility into shift coverage.',
    solutions: 'Geo-fenced mobile app, automated shift engine, payroll API integration, and live operations dashboard.',
    results: 'Payroll disputes down 90%. Admin overhead reduced by 70%. ROI achieved in 4 months.',
  },
  {
    title: 'Enterprise QA Automation Solutions',
    overview: 'Test transformation for a global banking client across web, mobile, and API layers.',
    stack: ['Selenium', 'Appium', 'RestAssured', 'Jenkins', 'Kubernetes'],
    challenges: 'Legacy manual QA, 4-week regression cycles, compliance audit pressure.',
    solutions: 'Layered automation pyramid, API-first strategy, containerized test grid, and BDD reporting for stakeholders.',
    results: 'Release frequency doubled. 85% automation coverage. Passed two consecutive regulatory audits.',
  },
  {
    title: 'Python Automation Tools',
    overview: 'Internal automation suite for a telecom client — log parsing, network config validation, and report generation.',
    stack: ['Python', 'FastAPI', 'Pandas', 'Celery', 'PostgreSQL'],
    challenges: 'Engineers spent 30% of time on repetitive log analysis and reporting tasks.',
    solutions: 'Built a modular CLI toolkit with web dashboard, scheduled jobs, and Slack integration.',
    results: 'Saved 4,000+ engineering hours annually. Adopted across three business units.',
  },
  {
    title: 'Network Interoperability Testing Lab',
    overview: 'Built a virtualized lab for testing interoperability across multi-vendor network equipment.',
    stack: ['Python', 'Ansible', 'GNS3', 'Docker', 'Grafana'],
    challenges: 'Physical lab bottlenecks, slow vendor onboarding, no centralized reporting.',
    solutions: 'Virtualized topology orchestration, automated test scenarios, and unified Grafana reporting.',
    results: 'Lab utilization up 3x. Vendor certification time cut from weeks to days.',
  },
]

export const faqs = [
  { q: 'How do you ensure project quality?', a: 'Every project follows our QA-first methodology: code reviews, automated testing, security scans, and staged releases with continuous monitoring.' },
  { q: 'What is your typical engagement model?', a: 'We offer fixed-price projects, dedicated teams, and staff augmentation. Most clients start with a free consultation and a discovery sprint.' },
  { q: 'Do you sign NDAs and protect IP?', a: 'Yes. We sign mutual NDAs before any technical discussion, and all client IP, code, and data remain fully owned by you.' },
  { q: 'Which industries do you serve?', a: 'Fintech, healthcare, retail, logistics, telecom, and enterprise SaaS — anywhere quality engineering and AI deliver leverage.' },
  { q: 'How quickly can you start?', a: 'For most engagements, we can kick off within 1–2 weeks of contract signing. Urgent needs can be accommodated faster.' },
]

export const openings = [
  { title: 'Senior QA Automation Engineer', type: 'Full-time', location: 'Hyderabad / Remote', exp: '4–7 years' },
  { title: 'Full Stack Developer (Next.js + Node)', type: 'Full-time', location: 'Hyderabad / Remote', exp: '3–6 years' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Remote', exp: '3–5 years' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Hyderabad', exp: '3–6 years' },
  { title: 'QA Automation Intern', type: 'Internship', location: 'Hyderabad', exp: '0–1 year' },
  { title: 'Frontend Developer Intern', type: 'Internship', location: 'Remote', exp: '0–1 year' },
]
