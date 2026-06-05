import canopy from "../assets/canopy.png";
import arktis from "../assets/arktis.png";
import clearpath from "../assets/clearpath.png";
import fjordkraft from "../assets/fjordkraft.png";
import lys from "../assets/lys.png";
import laurel from "../assets/laurel.png";
import StopMarketing from "../assets/StopMarketing.png";
import halalstreeteatz from "../assets/HalalStreeteatz.png";
import mystiqueresto from "../assets/mystique.jpg";
import movie from "../assets/capstone.png";
import footballmanager from "../assets/footballmanager.png";

export const work = [
  { n: "01", t: "Canopy Studio", y: "'26", cat: "Webflow", desc: "Sustainable architecture studio — Toronto.", tags: ["Webflow", "Brand", "🇨🇦"], img: canopy, link: null },
  { n: "02", t: "Arktis", y: "'26", cat: "Webflow", desc: "Premium Norwegian cold-brew coffee brand.", tags: ["Webflow", "E-comm", "🇳🇴"], img: arktis, link: null },
  { n: "03", t: "The Laurel", y: "'26", cat: "Webflow", desc: "Canadian culture & design editorial journal.", tags: ["Webflow", "Editorial", "🇨🇦"], img: laurel, link: null },
  { n: "04", t: "Lys", y: "'26", cat: "Webflow", desc: "Contemporary art exhibition in Tromsø.", tags: ["Webflow", "Culture", "🇳🇴"], img: lys, link: null },
  { n: "05", t: "Fjordkraft Gear", y: "'26", cat: "Webflow", desc: "Norwegian outdoor gear brand.", tags: ["Webflow", "Brand", "🇳🇴"], img: fjordkraft, link: null },
  { n: "06", t: "Clearpath", y: "'26", cat: "Webflow", desc: "Vancouver AI productivity SaaS.", tags: ["Webflow", "SaaS", "🇨🇦"], img: clearpath, link: null },

  { n: "07", t: "STOP Marketing", y: "'25", cat: "WordPress", desc: "Agency website — current employer.", tags: ["WordPress", "Agency"], img: StopMarketing, link: "https://stopmarketing.ag/" },
  { n: "08", t: "Mystique Resto", y: "'25", cat: "WordPress", desc: "Premium restaurant & lounge.", tags: ["WordPress", "Hospitality"], img: mystiqueresto, link: "https://mystiqueresto.com/" },
  { n: "09", t: "HalalStreetEatz", y: "'25", cat: "WordPress", desc: "Restaurant site with online ordering.", tags: ["WordPress", "F&B"], img: halalstreeteatz, link: "https://halalstreeteatz.com/" },

  // ── Figma mockups — paste your Figma share links into `link` when ready ──
  { n: "10", t: "EgglessCakeShop", y: "'24", cat: "Figma", desc: "UI/UX mockup for an online bakery brand.", tags: ["Figma", "UI/UX"], img: null, link: "https://www.figma.com/design/5uiHlFSrxKPtWqCeh2suDE/Eggless-Cake-Shop-Mockup" },
  { n: "11", t: "HalalStreetEatz App", y: "'24", cat: "Figma", desc: "Mobile app mockup for a street-food brand.", tags: ["Figma", "Mobile"], img: null, link: "https://www.figma.com/design/7LOnsYC3xL7m6Aotvbbb2A/HALALSTREETEATZ" },

  { n: "12", t: "Movie Recommendation App", y: "'25", cat: "Dev", desc: "AI recommendation system — Django + AWS.", tags: ["React Native", "Django", "AI"], img: movie, link: "https://github.com/Abelaash/MovieCapstoneProject" },
  { n: "13", t: "Soccer Management System", y: "'24", cat: "Dev", desc: "Football manager app — ASP.NET MVC.", tags: ["ASP.NET", "C#", "API"], img: footballmanager, link: "https://github.com/Abelaash/cpan369_FootballManager" },
];

export const workCategories = ["All", "Webflow", "WordPress", "Figma", "Dev"];

export const experience = [
  { y: "2024", role: "Digital Marketing Associate", co: "STOP Marketing Agency", desc: "Plan and run digital campaigns across social, email and web; collaborate with design & dev to ship integrated, results-driven work.", tag: "Present" },
  { y: "2025", role: "Co-Founder / Web Developer", co: "Poply Inc.", desc: "Built & maintained 5+ WordPress sites, lifting client site speed ~35% and cutting downtime under 1% annually.", tag: "Present" },
  { y: "2023", role: "Junior Software Engineer Intern", co: "Tech Mahindra", desc: "Integrated REST APIs and configured PEGA case types, cutting manual data entry 40% and resolution steps 15–20%.", tag: "Internship" },
  { y: "2022", role: "Full-Stack Developer Intern", co: "A R Luxury Management", desc: "Built FLXPAY with React/Next.js and designed full UI/UX in Figma, increasing site traffic 10%.", tag: "Internship" },
  { y: "2021", role: "Software Developer Intern", co: "Central Etobicoke Youth Agency", desc: "Shipped web & mobile apps in React / React Native on AWS at 99.9% uptime, boosting engagement 20%+.", tag: "Internship" },
];

export const skills = [
  { h: "Development", list: ["React", "JavaScript", "HTML/CSS", "Node", "Python", "Django", "PHP"] },
  { h: "Platforms / CMS", list: ["Webflow", "Drupal", "WordPress", "Shopify", "Elementor"] },
  { h: "Design & Tools", list: ["Figma", "Git", "AWS", "Docker", "Vercel"] },
  { h: "Marketing", list: ["Campaign strategy", "SEO", "Email", "Analytics"] },
];

export const education = [
  { d: "Computer Programming & Analysis", m: "Humber College · 2022–2025 · Honours" },
  { d: "Computer Programming", m: "Humber College · 2018–2020" },
];

export const awards = [
  { d: "Dean's Honours — W2025", gpa: "87%" },
  { d: "Dean's Honours — F2024", gpa: "92%" },
  { d: "Dean's Honours — F2023", gpa: "81%" },
  { d: "Dean's Honours — W2023", gpa: "91%" },
  { d: "Dean's Honours — W2022", gpa: "87%" },
];

export const social = {
  email: "abelaash.giritharan@gmail.com",
  linkedin: "https://www.linkedin.com/in/abelaash-giritharan-5b8943187/",
  github: "https://github.com/Abelaash",
};