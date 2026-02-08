import { Github, Linkedin, Instagram, Code2, Layout, Video, Mail, MapPin, Phone } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Firman Azhary",
  role: "Full Stack Developer & Technical Educator",
  description: "Crafting robust web solutions and empowering future developers. Specializing in high-performance applications with a creative edge.",
  location: "North Sumatra, Indonesia",
  email: "azharyoke948@gmail.com",
  phone: "+62 822-4643-1454",
  cvLink: "/asset/MUHAMMAD FIRMAN AZHARY_cv.pdf",
  socials: [
    { icon: Github, link: "https://github.com/firmanazhary", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/muhammad-firman-azhary-351202247/", label: "LinkedIn" },
    { icon: Instagram, link: "https://instagram.com/firmanazhary", label: "Instagram" },
  ],
};

export const SKILLS = [
  { name: "React & Tailwind", level: 90, color: "bg-blue-600" },
  { name: "PHP & Laravel", level: 85, color: "bg-indigo-600" },
  { name: "UI/UX Design", level: 80, color: "bg-slate-800" },
  { name: "Content Strategy", level: 85, color: "bg-rose-500" },
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "End-to-end development of scalable applications using React, Laravel, and modern CMS solutions.",
    icon: Code2,
    tags: ["Fullstack", "Performance", "Clean Code"]
  },
  {
    title: "Technical Mentorship",
    description: "Developing industry-standard IT curriculums and providing hands-on coding mentorship for students.",
    icon: Layout,
    tags: ["Education", "Curriculum", "Leadership"]
  },
  {
    title: "Digital Creative",
    description: "Crafting engaging visual content and user interfaces that resonate with modern digital audiences.",
    icon: Video,
    tags: ["Figma", "CapCut", "Branding"]
  }
];

export const EXPERIENCE = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    location: "Remote",
    description: [
      "Building dynamic web applications with React.js and Laravel.",
      "Developing high-converting WordPress sites for business clients.",
      "Consulting on SEO and performance optimization strategies."
    ],
  },
  {
    role: "IT Teacher & Curriculum Developer",
    company: "Pondok Tahfizh Abu Dzar Plus",
    period: "June 2024 - Present",
    location: "Bogor, Indonesia",
    description: [
      "Designed and delivered professional learning paths for HTML, CSS, JavaScript, and React.js development.",
      "Mentored students in UI/UX design and WordPress deployment to create industry-standard web platforms.",
      "Served as a Technical Competition Mentor, guiding students through national-level IT competitions and hackathons.",
      "Oversaw end-to-end project mentorship, ensuring students successfully build and deploy functional web applications."
    ],
  },
  {
    role: "Information Technology Teacher",
    company: "IDN Boarding School",
    period: "July 2023 - June 2024",
    location: "Bogor, Indonesia",
    description: [
      "Developed a full-stack curriculum covering PHP, Laravel, Tailwind CSS, and Bootstrap frameworks.",
      "Implemented Computational Thinking methodologies to strengthen students' logical reasoning and problem-solving skills.",
      "Acted as a Competition Strategist and Mentor, leading student teams to participate in various IT-related contests.",
      "Facilitated hands-on project-based learning, focusing on code integrity, aesthetics, and modern web standards."
    ],
  },
];