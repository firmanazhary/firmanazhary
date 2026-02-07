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
    period: "2024 - Present",
    location: "Bogor, Indonesia",
    description: [
      "Designed a comprehensive Web Dev learning path for students.",
      "Mentoring 50+ students in mastering modern web technologies.",
      "Optimizing academic workflows through custom-built internal tools."
    ],
  },
];