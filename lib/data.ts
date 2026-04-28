import type { LucideIcon } from "lucide-react";
import {
  Beaker,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  LineChart,
  Microscope,
  Music,
  Smartphone,
  Sparkles,
  Sun,
  Trophy,
  Users,
} from "lucide-react";

export const profile = {
  name: "Seonho Isaac Kim",
  shortName: "Seonho Kim",
  initials: "SK",
  headline: "Curious researcher, careful builder, friendly tutor.",
  tagline: "Aspiring pediatric healthcare professional",
  /**
   * REPLACE: tweak this short summary for the hero. Keep it 1–2 sentences,
   * first-person, friendly. This is the single most important sentence on
   * the site — it's what people read first.
   */
  summary:
    "Hi, I'm Seonho. I'm a high school sophomore in La Crescenta who loves the slow, careful work of research and the quick joy of helping someone finally understand something hard.",
  location: "La Crescenta, CA",
  email: "seonkim1003@gmail.com",
  phone: "818-808-8465",
};

/**
 * REPLACE: this is the main "About me" block on the page. Each card below
 * is a placeholder — swap out the body text with how YOU would describe
 * yourself. Keep the structure (intro, currently, beyond, values), or add
 * /remove cards in `aboutCards` to fit your story.
 */
export const aboutIntro = {
  eyebrow: "About me",
  title: "A little more about who I am",
  lead: "[REPLACE] I grew up between two languages, two cultures, and a lot of curiosity. I'm at my happiest when I'm learning something hands-on — pipetting in a lab, walking a tutee through a tricky physics problem, or sketching a study protocol on the back of a notebook.",
  pullQuote:
    "[REPLACE] I want to be the kind of doctor that kids look forward to seeing.",
  pullQuoteAttribution: "Future me, hopefully",
};

export type AboutCard = {
  title: string;
  body: string;
  icon: LucideIcon;
  accent: "sky" | "teal" | "violet" | "amber";
};

export const aboutCards: AboutCard[] = [
  {
    title: "What I'm doing right now",
    body: "[REPLACE] Leading a 3-person research team building a medication adherence app, running biotech experiments in a supervised lab, and helping youth-led nonprofits raise funds for mental health and self-defense outreach.",
    icon: Compass,
    accent: "sky",
  },
  {
    title: "What I care about",
    body: "[REPLACE] Pediatric healthcare, honest data, communities that look out for each other, and the quiet patience it takes to do small things really well.",
    icon: HeartHandshake,
    accent: "teal",
  },
  {
    title: "Outside of school",
    body: "[REPLACE] You'll catch me tutoring younger students, prepping for science fair, learning ASL, or rewatching the same comfort show for the fifth time. (Tell us your hobbies, music, books, the works.)",
    icon: Music,
    accent: "violet",
  },
  {
    title: "If we worked together",
    body: "[REPLACE] You'd find me organized, curious, and genuinely interested in the people I'm working with. I'm always looking for mentors, collaborators, and people who'll let me ask a lot of questions.",
    icon: Sparkles,
    accent: "amber",
  },
];

export type PersonalFact = {
  question: string;
  answer: string;
};

/**
 * REPLACE: short, friendly facts. These show up as a chips row near the
 * top of the about section. Keep answers short and personable.
 */
export const personalFacts: PersonalFact[] = [
  { question: "Based in", answer: "La Crescenta, CA" },
  { question: "Coffee or tea", answer: "[REPLACE] tea, mostly" },
  { question: "Always learning", answer: "ASL, biotech, kindness" },
  { question: "Languages", answer: "EN · KO · ASL" },
  { question: "Top dream", answer: "[REPLACE] pediatric medicine" },
];

export type Metric = {
  value: string;
  label: string;
  hint: string;
};

export const metrics: Metric[] = [
  {
    value: "$2,000+",
    label: "Raised for community initiatives",
    hint: "Across mental health and self-defense expos",
  },
  {
    value: "2,200+",
    label: "Survey respondents",
    hint: "Across two human-subject studies",
  },
  {
    value: "100,000+",
    label: "Individual data points",
    hint: "Cleaned, analyzed, and presented",
  },
];

export type ProjectKind = "Website" | "App";

export type Project = {
  id: string;
  title: string;
  kind: ProjectKind;
  role: string;
  summary: string;
  tags: string[];
  url?: string;
  href: string;
  icon: LucideIcon;
  logo?: string;
  emoji?: string;
  image?: string;
  accent: "sky" | "violet" | "teal" | "amber";
};

export const projects: Project[] = [
  {
    id: "humanity-over-ai",
    title: "Humanity Over AI",
    kind: "Website",
    role: "Contributor",
    summary:
      "Initiative advocating for human-centered values in an AI-accelerated world. Web presence for the campaign, resources, and community outreach.",
    tags: ["Advocacy", "Community", "Education"],
    url: "https://humanityoverAI.org",
    href: "https://humanityoverAI.org",
    icon: HeartHandshake,
    logo: "/logo-humanityoverai.png",
    accent: "violet",
  },
  {
    id: "homemade-delights",
    title: "Homemade Delights",
    kind: "Website",
    role: "Chief Financial Officer",
    summary:
      "Mental-health-awareness arm of Next Generation Advocates. Organized youth-led mini-expos that raised $600+ and collected 1,100+ survey responses on teen stressors and coping.",
    tags: ["Mental health", "Fundraising", "Survey research"],
    url: "https://homemade-delights.org",
    href: "https://homemade-delights.org",
    icon: Sun,
    logo: "/logo-homemade-delights.png",
    accent: "amber",
  },
  {
    id: "ssda",
    title: "Student Self-Defense Advocates",
    kind: "Website",
    role: "Head of Website Department",
    summary:
      "Youth-led self-defense initiative under Next Generation Advocates. Led the website, raised $1,200+ in donations, and gathered 500+ survey responses across mini-expos.",
    tags: ["Safety", "Youth-led", "Web leadership"],
    url: "https://studentselfdefenseadvocates.org",
    href: "https://studentselfdefenseadvocates.org",
    icon: Users,
    logo: "/logo-ssda.png",
    accent: "teal",
  },
  {
    id: "medication-app",
    title: "Medication Adherence App",
    kind: "App",
    role: "Research Team Captain",
    summary:
      "Mobile app concept and human-subject study designed to improve patient medication adherence. Led a 3-person team through protocol design, data collection, analysis, and competitive presentations.",
    tags: ["Healthcare", "Human-subject research", "Data analysis"],
    href: "#projects",
    icon: Smartphone,
    emoji: "💊",
    image: "/research-presentation.png",
    accent: "sky",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  icon: LucideIcon;
};

export const experience: Experience[] = [
  {
    org: "Science Research Class",
    role: "Research Team Captain",
    period: "Aug 2025 – Present",
    location: "La Crescenta, CA",
    icon: LineChart,
    bullets: [
      "Lead a team of 3 designing a mobile app to improve medication adherence in patients.",
      "Built study protocol and ran human-subject research comparing current adherence to projected app outcomes.",
      "Analyzed survey data to evaluate usability and potential clinical impact.",
      "Presented findings to 60+ peers and at the School Science Fair, LA County Science & Engineering Fair, and SkillsUSA.",
    ],
  },
  {
    org: "Academy of Science and Medicine",
    role: "Tech Crew",
    period: "May 2025 – Present",
    location: "La Crescenta, CA",
    icon: Microscope,
    bullets: [
      "Performed biotechnology experiments using micropipetting, gel electrophoresis, and basic genetic engineering techniques.",
      "Prepared samples, ran gels, and interpreted results for ongoing class projects.",
      "Operated lab equipment and followed safety protocols to maintain a sterile, organized workspace.",
    ],
  },
  {
    org: "Next Generation Advocates",
    role: "CFO, Homemade Delights · Head of Website, SSDA",
    period: "Jul 2024 – Present",
    location: "Los Angeles, CA",
    icon: HeartHandshake,
    bullets: [
      "Promoted mental health awareness through youth-led mini-expos and showcases.",
      "Raised $600+ for Homemade Delights and $1,200+ for Student Self-Defense Advocates.",
      "Designed and ran 50+ question surveys, collecting 1,600+ responses and 80,000+ data points across both initiatives.",
    ],
  },
  {
    org: "Independent",
    role: "Tutor — Math, Chemistry, Physics",
    period: "Aug 2024 – Present",
    location: "La Crescenta, CA",
    icon: GraduationCap,
    bullets: [
      "Provide weekly one-on-one tutoring to 2–3 high school students.",
      "Use analogies and step-by-step explanations to make complex concepts accessible.",
      "All tutees have earned As in their math and science classes.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Research & Lab",
    icon: Beaker,
    items: [
      "Micropipetting",
      "Gel electrophoresis",
      "Basic genetic engineering",
      "Experimental design",
      "Human-subject data collection",
      "Survey design",
      "Data analysis (Excel / Sheets)",
      "Scientific presentation",
    ],
  },
  {
    title: "Technical & Academic",
    icon: LineChart,
    items: [
      "Math problem-solving",
      "Chemistry problem-solving",
      "Scientific writing",
      "STEM tutoring",
      "Web project leadership",
    ],
  },
  {
    title: "Interpersonal",
    icon: Users,
    items: [
      "Team leadership",
      "Public speaking",
      "Mentoring younger students",
      "Cultural sensitivity",
      "Community communication",
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    items: [
      "English (native / bilingual)",
      "Korean (native / bilingual)",
      "American Sign Language (elementary)",
    ],
  },
];

export type Education = {
  school: string;
  detail: string;
  period: string;
  notes?: string[];
};

export const education: Education[] = [
  {
    school: "Crescenta Valley High School",
    detail: "Expected graduation: June 2028",
    period: "Current",
    notes: ["GPA: 4.0 unweighted · 4.321 weighted"],
  },
  {
    school: "Glendale Community College",
    detail: "Dual enrollment",
    period: "Sept 2025 – Present",
    notes: ["ASL 101 (A)", "ASL 102 (in progress)", "EMT 138 (in progress)"],
  },
];

export type Award = {
  title: string;
  org: string;
  year: string;
  icon: LucideIcon;
};

export const awards: Award[] = [
  {
    title: "President's Gold Award for Community Impact",
    org: "Presidential Volunteer Service",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Community Impact Award",
    org: "Korean American Federation of Los Angeles (KAFLA)",
    year: "2024",
    icon: Trophy,
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
];

export const siteUrl = "https://seonhokim.com";

export const accentClasses: Record<
  "sky" | "violet" | "teal" | "amber",
  {
    chip: string;
    iconBg: string;
    iconFg: string;
    glow: string;
    eyebrow: string;
  }
> = {
  sky: {
    chip: "bg-sky-50 text-sky-700 ring-1 ring-sky-200/70",
    iconBg: "bg-sky-50 ring-1 ring-sky-200/70",
    iconFg: "text-sky-600",
    glow: "from-sky-200/40",
    eyebrow: "text-sky-600",
  },
  violet: {
    chip: "bg-violet-50 text-violet-700 ring-1 ring-violet-200/70",
    iconBg: "bg-violet-50 ring-1 ring-violet-200/70",
    iconFg: "text-violet-600",
    glow: "from-violet-200/40",
    eyebrow: "text-violet-600",
  },
  teal: {
    chip: "bg-teal-50 text-teal-700 ring-1 ring-teal-200/70",
    iconBg: "bg-teal-50 ring-1 ring-teal-200/70",
    iconFg: "text-teal-600",
    glow: "from-teal-200/40",
    eyebrow: "text-teal-600",
  },
  amber: {
    chip: "bg-amber-50 text-amber-700 ring-1 ring-amber-200/70",
    iconBg: "bg-amber-50 ring-1 ring-amber-200/70",
    iconFg: "text-amber-600",
    glow: "from-amber-200/40",
    eyebrow: "text-amber-600",
  },
};
