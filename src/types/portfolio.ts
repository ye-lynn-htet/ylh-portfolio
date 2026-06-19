export type Accent = "indigo" | "sky" | "emerald" | "amber" | "violet" | "rose";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  accent: Accent;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  accent: Accent;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  appStore: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  navLinks: NavLink[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  contact: Contact;
}
