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
      "Maintain and refactor Flutter applications for iOS and Android, improving performance and maintainability",
      "Research and develop a remote rehabilitation system using Flutter, MQTT, Python, and FastAPI",
      "Publish app updates to the Apple App Store and Google Play Store, resolving production issues",
    ],
  },
  {
    company: "CODIGO",
    role: "Senior iOS Developer",
    period: "Nov 2023 — Oct 2024",
    accent: "sky",
    highlights: [
      "Developed and maintained SPOTV NOW and Pet Lovers Centre iOS applications",
      "Implemented In-App Purchases, biometric authentication, and BrightCove video streaming",
      "Protected sensitive user data with Apple Keychain and encryption",
    ],
  },
  {
    company: "Binary Lab",
    role: "Senior iOS Developer",
    period: "Feb 2023 — Nov 2023",
    accent: "emerald",
    highlights: [
      "Developed and maintained the SAYA and MCPA Member applications",
      "Integrated Zoom SDK and VdoCipher SDK for secure online learning",
      "Implemented Firebase Cloud Messaging and WebSocket for real-time communication",
    ],
  },
  {
    company: "Light Idea Software",
    role: "iOS Developer",
    period: "Jun 2021 — Feb 2023",
    accent: "amber",
    highlights: [
      "Developed native iOS applications from scratch through to App Store release",
      "Collaborated with Agile teams to design, develop, test, and deploy new features",
      "Maintained existing applications and improved overall application stability",
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
    title: "MCPA Member App",
    description: "Membership management and information sharing app for the Myanmar Computer Professionals Association — sign-up, events, and profile flows.",
    tags: ["UIKit", "RxSwift", "RxCocoa", "Firebase", "WebSocket"],
    accent: "sky",
    appStore: "",
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
  linkedin: "linkedin.com/in/ye-lynn-htet-baa633252",
  github: "github.com/ye-lynn-htet",
};
