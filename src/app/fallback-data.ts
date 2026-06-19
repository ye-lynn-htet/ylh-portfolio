import type { NavLink, SkillGroup, Experience, Project, Contact } from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    accent: "sky",
    items: ["UIKit", "SwiftUI", "Swift", "Flutter", "Dart", "Python", "FastAPI"],
  },
  {
    label: "Reactive & Data",
    accent: "indigo",
    items: [
      "RxSwift", "RxCocoa", "Combine", "Riverpods",
      "Realm", "CoreData", "Firebase", "RestAPI", "WebSocket", "MQTT",
    ],
  },
  {
    label: "Tools & Agile",
    accent: "emerald",
    items: ["GitHub", "SourceTree", "Backlog"],
  },
  {
    label: "Specialized SDKs",
    accent: "amber",
    items: ["GoogleMap", "Zoom", "VdoCipher", "BrightCove", "TSC Barcode SDKs"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Telaaxon",
    role: "Senior Application Developer",
    period: "Jan 2025 — Present",
    accent: "indigo",
    highlights: [
      "Leading Flutter refactoring initiatives across multiple modules",
      "Building remote rehabilitation systems with real-time MQTT communication",
      "Collaborating directly with tech leads on architecture decisions",
    ],
  },
  {
    company: "CODIGO",
    role: "Senior iOS Developer",
    period: "Nov 2023 — Oct 2024",
    accent: "sky",
    highlights: [
      "Built SPOTV NOW — a live sports streaming app with BrightCove SDK integration",
      "Developed Pet Lovers Centre e-commerce app with In-App purchases and biometrics",
      "Delivered pixel-perfect UIKit interfaces for high-traffic consumer apps",
    ],
  },
  {
    company: "Binary Lab",
    role: "Senior iOS Developer",
    period: "Feb 2023 — Nov 2023",
    accent: "emerald",
    highlights: [
      "Developed SAYA English learning app with Zoom and VdoCipher SDKs",
      "Built MCPA application with real-time WebSocket features",
      "Implemented secure Apple Keychain services for credential storage",
    ],
  },
  {
    company: "Light Idea Software",
    role: "iOS Developer",
    period: "Jun 2021 — Feb 2023",
    accent: "amber",
    highlights: [
      "Built iOS apps from scratch using MVVM architecture and RxSwift",
      "Developed Flash Mall EPOS system with Bluetooth print integration",
      "Delivered Sonix Delivery app — real-time driver tracking and order management",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SPOTV NOW",
    description: "Live sports streaming app for Southeast Asian markets — BrightCove-powered video, real-time scores, and multi-language support.",
    tags: ["SwiftUI", "Combine", "Realm", "BrightCove SDK"],
    accent: "indigo",
    appStore: "https://apps.apple.com/sg/app/spotv-now-sports-streaming/id1585915793",
  },
  {
    title: "SAYA — English Learning",
    description: "Interactive language learning app with live Zoom classrooms and VdoCipher-protected video lessons.",
    tags: ["UIKit", "ZoomSDK", "VdoCipher"],
    accent: "violet",
    appStore: "https://apps.apple.com/sg/app/saya-the-learning-app/id1612592914",
  },
  {
    title: "Kakely",
    description: "Social writing app with collaborative editing, community features, and real-time syncing via REST APIs.",
    tags: ["Flutter", "Dart", "Riverpods", "RestAPI"],
    accent: "amber",
    appStore: "https://apps.apple.com/jp/app/kakely/id6642692743?l=en-US",
  },
  {
    title: "Pet Lovers Centre",
    description: "E-commerce app for Singapore's largest pet retailer — product catalog, cart, and biometric-secured checkout.",
    tags: ["UIKit", "RxSwift", "Realm"],
    accent: "sky",
    appStore: "https://apps.apple.com/jp/app/plc-vip-concierge-sg/id1471953601?l=en-US",
  },
  {
    title: "Flash Mall EPOS",
    description: "Point-of-sale system with Bluetooth thermal printing, TSC barcode scanning, and inventory management.",
    tags: ["UIKit", "Bluetooth", "TSC Barcode SDK"],
    accent: "rose",
    appStore: "https://apps.apple.com/jp/app/flash-mall-shop-epos/id1637021280?l=en-US",
  },
];

export const contact: Contact = {
  email: "yelynnhtet22798@gmail.com",
  location: "Kobe, Japan",
  linkedin: "linkedin.com/yelynnhtet",
  github: "github.com/ye-lynn-htet",
};
