import type { Route } from "./+types/home.ts";
import {
  HomePage
} from "~/components/routes/home/home.components.tsx";
import { MainLayout } from "../root.tsx";
import { EducationSectionProps, ExperienceSectionProps, GroupedSkillModule, HomePageProps, SkillsSectionProps, TabbedSkillModule } from "../models/routes/home/home.models.ts";
import { i18n } from "@/lib/language/deno-config.ts";

export function meta({ params }: Route.MetaArgs) {
  // e.g. /sw/about → params.lang = 'sw'
  const lang = params.lang ?? 'default';

  if (!i18n.isInitialized) {
    return [
      { title: 'THOMAS KONGOLO | ENGINEER_FS_DEV' },
      { name: 'description', content: 'Electrical Engineer by training, Fullstack Architect by craft. I build high-integrity digital systems that bridge the gap between physical hardware precision and modern web scalability.' },
    ];
  }

  const t = i18n.getFixedT(lang, 'routes-info');

  return [
    { title: t('home.title') },
    { name: 'description', content: t('home.description') },
  ];
}



const frontendModule: TabbedSkillModule = {
  kind: "tabbed",
  accent: "primary",
  icon: "terminal",
  moduleLabel: "MODULE_01",
  title: "Frontend Engineering",
  tabs: [
    {
      id: "web-stack",
      label: "WEB",
      description:
        "Reactive, high-performance web interfaces with meticulous attention to hardware-software synchronization.",
      tags: ["NEXT_JS", "REACT", "TYPESCRIPT", "TAILWIND"],
    },
    {
      id: "mobile-stack",
      label: "MOBILE",
      description:
        "Native-feel performance for mission-critical mobile control systems and IoT monitoring.",
      tags: ["FLUTTER", "KOTLIN", "REACT_NATIVE"],
    },
    {
      id: "desktop-stack",
      label: "DESKTOP",
      description:
        "Cross-platform desktop tools for industrial control and data visualization.",
      tags: ["ELECTRON", "TAURI"],
    },
  ],
  preferredEnvironmentLabel: "PREFERRED_ENVIRONMENT",
  preferredEnvironmentValue: "Vite + React + Framer",
};

const backendModule: GroupedSkillModule = {
  kind: "grouped",
  accent: "tertiary",
  icon: "dns",
  moduleLabel: "MODULE_02",
  title: "Backend Engineering",
  description:
    "Architecting resilient server-side logic and distributed systems with a focus on low-latency and reliability.",
  groups: [
    {
      label: "APIs & INTEGRATIONS",
      variant: "solid-chips",
      items: ["REST", "GRAPHQL", "gRPC"],
    },
    {
      label: "CUSTOM PROTOCOLS",
      variant: "cards",
      items: [{ title: "MQTT / CoAP" }, { title: "MODBUS / TCP" }],
    },
    {
      label: "REAL-TIME & MEDIA",
      items: ["UDP", "RTSP", "WEBRTC"],
    },
  ],
};

const electricalModule: GroupedSkillModule = {
  kind: "grouped",
  accent: "primary",
  icon: "memory",
  moduleLabel: "MODULE_03",
  title: "Electrical Engineering",
  description:
    "Deep-level hardware-software integration utilizing precision engineering principles for robust physical systems.",
  groups: [
    {
      label: "CUSTOM CALCULATIONS",
      items: ["POWER_ANALYSIS", "THERMAL_MODELING", "SIMULATION"],
    },
    {
      label: "DESIGN & PROTOTYPING",
      variant: "cards",
      items: [
        { title: "PCB DESIGN", description: "Altium / KiCad" },
        { title: "FPGA / EMBEDDED", description: "Verilog / VHDL / C" },
      ],
    },
    {
      label: "HARDWARE INTERFACING",
      items: ["SPI", "I2C", "UART", "ADC/DAC"],
    },
  ],
};

const skillsData: SkillsSectionProps = {
  sectionId: "02_SKILLS",
  titleEyebrow: "SYSTEM_CAPABILITIES",
  title: "Tech Stack & Tools",
  modules: [frontendModule, backendModule, electricalModule],
};

const experienceData: ExperienceSectionProps = {
  sectionId: "03_EXPERIENCE",
  titleEyebrow: "PROFESSIONAL_TIMELINE",
  title: "Engineering History",
  totalUptime: "TOTAL_UPTIME: 2,920_DAYS",
  items: [
    {
      period: "2021 — PRESENT",
      role: "SENIOR_FS_ENGINEER",
      company: "Volt Systems Int.",
      badge: "ACTIVE_ROLE",
      summary:
        "Lead architect for the proprietary Energy Monitoring Dashboard. Optimized data ingestion pipeline for industrial smart meters using Go and WebSocket protocols, resulting in a 40% reduction in reporting latency.",
      tags: ["#DISTRIBUTED_SYSTEMS", "#REACT_NATIVE", "#MQTT_PROTOCOLS"],
    },
    {
      period: "2018 — 2021",
      role: "CONTROL_SYSTEMS_DEV",
      company: "Kinetic Dynamics",
      summary:
        "Developed PLC-to-Web interfaces for automated manufacturing plants. Integrated SCADA systems with modern React frontends to provide real-time hardware status visualizations for floor managers.",
      tags: ["#INDUSTRIAL_IOT", "#C_SHARP", "#SQL_SERVER"],
    },
  ],
};

const educationData: EducationSectionProps = {
  cardHeading: "Academic Foundation",
  cardIcon: "school",
  cardPeriod: "2014 — 2018",
  cardTitle: "B.Sc. Electrical Engineering",
  cardSubtitle: "Metropolitan Technical University",
  specializationLabel: "SPECIALIZATION",
  specializationText:
    "Integrated Circuit Design, Signal Processing, and Embedded Software Systems.",
  narrativeEyebrow: "THEORETICAL_GROUNDING",
  narrativeTitle: "Bridging Hardware and Software",
  narrativeText:
    "My engineering background provides a unique perspective on fullstack development. I treat software architectures like electrical circuits: prioritizing efficiency, minimizing resistance in UX, and ensuring every module is perfectly grounded.",
  metrics: [
    { value: "98.5%", label: "Precision_Rate", accent: "primary" },
    { value: "350+", label: "Deployments", accent: "tertiary" },
  ],
};

const homePageData: HomePageProps = {
  hero: {
    sectionId: "01_ABOUT",
    status: "SYSTEM_STATUS: ONLINE",
    heading: {
      lineOneLead: "Precision",
      lineOneAccent: "Logic.",
      lineTwoLead: "Fluid",
      lineTwoAccent: "Code.",
    },
    description:
      "Electrical Engineer by training, Fullstack Architect by craft. I build high-integrity digital systems that bridge the gap between physical hardware precision and modern web scalability.",
    actions: [
      { label: "VIEW_PROJECTS", href: "#03_EXPERIENCE", variant: "primary" },
      { label: "DOWNLOAD_CV", variant: "secondary" },
    ],
    portraitSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVvhscwiCXSwiLv_aAjQT1JFTEOuKcNwd1suhzJK0ys6c0LK6F1rywRRvy3L1aFC6YzIja5f6-3Zkjc1tL-hRh7DxnjZlDYPEmH3nNWmtRdYM1vPKlvv11HXGUG5OGNvT0KDeBWDmIEYIzmYNfGZ6tDqhkvNAz4dOiH7u_NZE56grleeEP33bp8pcg4lZAcn3jWImYw8lNwxbB3b41FmqvW8YF67eb7BOUuYg8bOR0UYbuao589OaZqYpnzsoWz9Y8Zm8HpVUtzw",
    portraitAlt: "Portrait",
    experienceBadge: {
      value: "08+",
      label: "Years_Experience",
    },
  },
  skills: skillsData,
  experience: experienceData,
  education: educationData,
  contact: {
    sectionId: "04_CONTACT",
    titlePrefix: "Ready to",
    titleAccent: "Initiate",
    titleSuffix: "Connection?",
    description:
      "Whether you're looking for technical leadership on a complex fullstack build or engineering consultation for IoT projects.",
    ctaHref: "mailto:hello@thomaskongolo.dev",
    ctaIcon: "send",
    ctaLabel: "SEND_SIGNAL",
    responseTime: "RESPONSE_TIME: <24HR",
  },
};

export default function Home() {
  return (
    <MainLayout>
      <HomePage {...homePageData} />
    </MainLayout>
  );
}
