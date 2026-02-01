import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Firman Azhary",
  role: "Full Stack Developer & Technical Educator",
  description: "Bridging the gap between complex code and intuitive learning. I craft scalable web solutions while empowering the next generation of tech leaders.",
  location: "Tebing Tinggi, Sumatra Utara, Indonesia",
  email: "azharyoke948@gmail.com",
  phone: "+62 822-4643-1454",
  cvLink: "/asset/cv_azhary.pdf", // Pastikan file ada di folder public/asset
  socials: [
    { icon: Github, link: "https://github.com/firmanazhary", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/muhammad-firman-azhary-351202247/", label: "LinkedIn" },
    { icon: Instagram, link: "https://instagram.com/firmanazhary", label: "Instagram" },
  ],
};

export const SKILLS = [
  { name: "HTML & CSS", level: 95, color: "bg-orange-500" },
  { name: "JavaScript (ES6+)", level: 85, color: "bg-yellow-400" },
  { name: "React & Tailwind", level: 90, color: "bg-cyan-400" },
  { name: "PHP & Laravel", level: 80, color: "bg-red-500" },
  { name: "Flutter (Mobile)", level: 75, color: "bg-blue-400" },
];

export const EXPERIENCE = [
  {
    role: "IT Teacher & Curriculum Developer",
    company: "Pondok Tahfizh Abu Dzar Plus",
    period: "June 2024 - Present",
    description: "Spearheading the web development curriculum for middle school students, focusing on modern UI/UX principles and practical coding skills. Mentoring students to build real-world deployed projects.",
  },
  {
    role: "IT Teacher",
    company: "IDN Boarding School",
    period: "July 2023 - June 2024",
    description: "Designed and delivered comprehensive modules on HTML, CSS, JS, and Laravel. Facilitated an integrated learning environment combining religious studies with cutting-edge technology.",
  },
  {
    role: "Software Engineering Student",
    company: "IDN Polytechnic",
    period: "July 2022 - Present",
    description: "Pursuing a Bachelor of Applied Science (D4), specializing in scalable web architectures and mobile application development.",
  },
];

export const PROJECTS = [
  {
    title: "Abu Dzar Tahfizh Plus",
    description: "A comprehensive academic portal showcasing Qur’an memorization programs and student activities. Features a responsive design with seamless registration flows.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/asset/project-1.png", // Ganti dengan path gambarmu
    link: "https://indotravel-sooty.vercel.app/",
  },
  {
    title: "Terrawatt Electrical",
    description: "Professional company profile for an electrical service provider. Built to establish digital presence with a focus on service showcasing and lead generation.",
    tags: ["WordPress", "CMS", "Responsive"],
    image: "/asset/project-2.png",
    link: "https://terrawattelectrical.com/",
  },
  {
    title: "Digital Al-Qur'an",
    description: "An interactive spiritual platform providing easy access to Holy Qur'an verses with high-quality audio recitations and translation features.",
    tags: ["API Integration", "Audio Streaming", "UI/UX"],
    image: "/asset/project-3.png",
    link: "https://quran-view.vercel.app/",
  },
];