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
import halalstreetWeb from "../assets/HalalStreetEatzWeb.png";
import KaboomWings from "../assets/kaboomwings.jpg";
import { automations } from "./automations";

// Uncomment once exported — CRA hard-fails the build on a missing asset.
// import MystiqueMenuCover from "../assets/mystique-menu.png";

/**
 * status — the single source of truth for how a card presents.
 *   "live"    → shipped work, `link` points at the real thing
 *   "concept" → self-initiated / spec work, built but no client
 *   "soon"    → real work, not public yet. Requires `eta`.
 *
 * `link` is ONLY a URL. It is not doing double duty as a status flag,
 * so dropping a link never silently changes a card's meaning.
 *
 * `eta` is read ONLY when status === "soon". Anywhere else it's dead data.
 *
 * PDFs live in /public/pdf and are referenced as plain strings, NOT imports.
 * Files under public/ are copied verbatim and never touched by webpack, so a
 * wrong path 404s on click instead of failing the build. Verify by clicking.
 */
export const work = [
  // Newest work first. Grid order and CATEGORY_ORDER (pill order) agree.

  // ── AI Automation — Make.com + AI, built Oct 2026 ──
  { n: "01", t: "AI Meeting Notes to CRM", y: "'26", cat: "AI Automation", desc: "Turns rough sales-call notes into a HubSpot note, deal-stage update, next steps and a drafted follow-up email.", tags: ["Make.com", "AI", "HubSpot CRM"], img: automations["meeting-notes-crm"].img, link: null, route: "/automation/meeting-notes-crm", status: "live" },
  { n: "02", t: "AI Stale Deal Alert", y: "'26", cat: "AI Automation", desc: "Finds stalled HubSpot deals every morning, drafts a follow-up email and creates a prioritised task for each.", tags: ["Make.com", "AI", "HubSpot CRM"], img: automations["stale-deal-alert"].img, link: null, route: "/automation/stale-deal-alert", status: "live" },
  { n: "03", t: "AI Weekly Ad Performance Report", y: "'26", cat: "AI Automation", desc: "Turns Google Ads and Meta Ads data into a client-ready weekly report in Google Docs, with AI analysis and recommendations.", tags: ["Make.com", "AI", "Paid Media"], img: automations["weekly-ad-report"].img, link: null, route: "/automation/weekly-ad-report", status: "live" },
  { n: "04", t: "AI Ad Spend Anomaly Alert", y: "'26", cat: "AI Automation", desc: "Checks every campaign daily against its 7-day average and emails an alert when spend spikes, drops or conversions stop.", tags: ["Make.com", "AI", "Paid Media"], img: automations["ad-anomaly-alert"].img, link: null, route: "/automation/ad-anomaly-alert", status: "live" },
  { n: "05", t: "AI Lead-to-Deal Pipeline", y: "'26", cat: "AI Automation", desc: "Scores inbound leads with AI and creates the HubSpot contact, deal and follow-up task automatically.", tags: ["Make.com", "AI", "HubSpot CRM"], img: automations["lead-to-deal"].img, link: null, route: "/automation/lead-to-deal", status: "live" },
  { n: "06", t: "AI Competitor Website Monitor", y: "'26", cat: "AI Automation", desc: "Watches competitor websites for changes and summarises what's new with AI.", tags: ["Make.com", "AI", "Monitoring"], img: automations["competitor-monitor"].img, link: null, route: "/automation/competitor-monitor", status: "live" },
  { n: "07", t: "AI SEO Content Brief Generator", y: "'26", cat: "AI Automation", desc: "Turns target keywords into structured SEO content briefs, saved to Google Sheets & Docs.", tags: ["Make.com", "AI", "SEO"], img: automations["seo-brief"].img, link: null, route: "/automation/seo-brief", status: "live" },
  { n: "08", t: "AI Ad Copy Localizer (EN → NO)", y: "'26", cat: "AI Automation", desc: "Adapts English ad copy into natural Norwegian for local campaigns.", tags: ["Make.com", "AI", "Paid Media"], img: automations["ad-localizer"].img, link: null, route: "/automation/ad-localizer", status: "live" },
  { n: "09", t: "AI Content Repurposing Engine", y: "'26", cat: "AI Automation", desc: "Takes new posts from an RSS feed and repurposes them into ready-to-use social content.", tags: ["Make.com", "AI", "Content"], img: automations["content-repurposing"].img, link: null, route: "/automation/content-repurposing", status: "live" },

  // ── Paid media — real work, case studies in progress ──
  { n: "10", t: "Laser Spot", y: "'26", cat: "Marketing", desc: "Search & Performance Max campaign build for a local clinic.", tags: ["Google Ads", "Search", "PMax"], img: null, link: null, status: "soon", eta: "Aug 2026" },
  { n: "11", t: "Eggless Cake Shop", y: "'26", cat: "Marketing", desc: "Full-funnel creative testing & retargeting for a specialty bakery.", tags: ["Meta Ads", "Creative", "Retargeting"], img: null, link: null, status: "soon", eta: "Aug 2026" },

  // ── Print / brand design ──
  { n: "12", t: "Kaboom Wings — Menu", y: "'26", cat: "Canva", desc: "Trifold and dine-in menus built on a comic pop-art brand system.", tags: ["Canva", "Print", "Menu"], img: KaboomWings, link: "/pdf/KaboomWingsMenu.pdf", status: "live" },
  { n: "13", t: "Mystique Resto — Menu", y: "'24", cat: "Canva", desc: "Print menu for a premium restaurant & lounge.", tags: ["Canva", "Print", "Menu"], img: mystiqueresto, link: "/pdf/MystiqueMenu.pdf", status: "live" },

  // ── Shipped client work ──
  { n: "14", t: "STOP Marketing", y: "'25", cat: "WordPress", desc: "Agency website — current employer.", tags: ["WordPress", "Agency"], img: StopMarketing, link: "https://stopmarketing.ag/", status: "live" },
  { n: "15", t: "Mystique Resto", y: "'25", cat: "WordPress", desc: "Premium restaurant & lounge.", tags: ["WordPress", "Restaurant"], img: mystiqueresto, link: "https://mystiqueresto.com/", status: "live" },
  { n: "16", t: "HalalStreetEatz", y: "'25", cat: "WordPress", desc: "Restaurant site with online ordering.", tags: ["WordPress", "Restaurant"], img: halalstreetWeb, link: "https://halalstreeteatz.com/", status: "live" },

  // ── Dev ──
  { n: "17", t: "Movie Recommendation App", y: "'25", cat: "Dev", desc: "AI recommendation system — Django + AWS.", tags: ["React Native", "Django", "AI"], img: movie, link: "https://github.com/Abelaash/MovieCapstoneProject", status: "live" },
  { n: "18", t: "Soccer Management System", y: "'24", cat: "Dev", desc: "Football manager app — ASP.NET MVC.", tags: ["ASP.NET", "C#", "API"], img: footballmanager, link: "https://github.com/Abelaash/cpan369_FootballManager", status: "live" },

  // ── Figma ──
  { n: "19", t: "HalalStreetEatz App", y: "'24", cat: "Figma", desc: "Web app mockup for a street-food brand.", tags: ["Figma", "Web"], img: halalstreeteatz, link: "https://www.figma.com/design/7LOnsYC3xL7m6Aotvbbb2A/HALALSTREETEATZ", status: "live" },

  // ── Concept work — self-initiated, labelled as such ──
  { n: "20", t: "Canopy Studio", y: "'26", cat: "Webflow", desc: "Self-initiated concept — sustainable architecture studio, Toronto.", tags: ["Webflow", "Brand"], img: canopy, link: null, status: "concept" },
  { n: "21", t: "Arktis", y: "'26", cat: "Webflow", desc: "Self-initiated concept — Nordic cold-brew coffee brand.", tags: ["Webflow", "E-comm"], img: arktis, link: null, status: "concept" },
  { n: "22", t: "The Laurel", y: "'26", cat: "Webflow", desc: "Self-initiated concept — culture & design editorial journal.", tags: ["Webflow", "Editorial"], img: laurel, link: null, status: "concept" },
  { n: "23", t: "Lys", y: "'26", cat: "Webflow", desc: "Self-initiated concept — contemporary art exhibition site.", tags: ["Webflow", "Culture"], img: lys, link: null, status: "concept" },
  { n: "24", t: "Nordvind Gear", y: "'26", cat: "Webflow", desc: "Self-initiated concept — outdoor gear brand.", tags: ["Webflow", "Brand"], img: fjordkraft, link: null, status: "concept" },
  { n: "25", t: "Clearpath", y: "'26", cat: "Webflow", desc: "Self-initiated concept — AI productivity SaaS landing page.", tags: ["Webflow", "SaaS"], img: clearpath, link: null, status: "concept" },
];

// Derived so a pill can never outlive its projects.
const CATEGORY_ORDER = ["AI Automation", "Marketing", "Canva", "WordPress", "Dev", "Figma", "Webflow"];
export const workCategories = [
  "All",
  ...CATEGORY_ORDER.filter((c) => work.some((w) => w.cat === c)),
];

export const experience = [
  { y: "2025", role: "Digital Marketing Associate", co: "STOP Marketing Agency", desc: "Plan and run digital campaigns across social, email and web; collaborate with design & dev to ship integrated, results-driven work.", tag: "Present" },
  { y: "2025", role: "Co-Founder / Web Developer", co: "Poply Inc.", desc: "Built & maintained 5+ WordPress sites, lifting client site speed ~35% and cutting downtime under 1% annually.", tag: "Present" },
  { y: "2023", role: "Junior Software Engineer Intern", co: "Tech Mahindra", desc: "Integrated REST APIs and configured PEGA case types, cutting manual data entry 40% and resolution steps 15–20%.", tag: "Internship" },
  { y: "2022", role: "Full-Stack Developer Intern", co: "A R Luxury Management", desc: "Built FLXPAY with React/Next.js and designed full UI/UX in Figma, increasing site traffic 10%.", tag: "Internship" },
  { y: "2021", role: "Software Developer Intern", co: "Central Etobicoke Youth Agency", desc: "Shipped web & mobile apps in React / React Native on AWS at 99.9% uptime, boosting engagement 20%+.", tag: "Internship" },
];

export const skills = [
  { h: "Marketing", list: ["Google Ads", "Meta Ads", "SEO", "GA4", "Google Tag Manager", "Campaign strategy", "Email"] },
  { h: "AI Automation & CRM", list: ["Make.com", "AI workflows", "Prompt design", "HubSpot CRM", "GoHighLevel", "Webhooks & APIs"] },
  { h: "Development", list: ["React", "JavaScript", "HTML/CSS", "Node", "Python", "Django", "PHP"] },
  { h: "Platforms / CMS", list: ["Webflow", "WordPress", "Shopify", "Elementor"] },
  { h: "Design & Tools", list: ["Figma", "Canva", "Git", "AWS", "Docker", "Vercel"] },
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