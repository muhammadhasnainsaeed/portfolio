import { Code2, Server, TestTube, Brain } from "lucide-react";

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks — React, Next.js, Vue, and Nuxt on the frontend, with Node.js and Express powering the backend.",
    icon: Code2,
    features: [
      "Responsive, Accessible UIs",
      "REST API Development",
      "Database Integration (PostgreSQL, MongoDB)",
      "SEO & Performance Optimized",
    ],
    highlight: "Production Ready",
    illustration: "/features/build.svg",
  },
  {
    title: "Frontend Engineering",
    description:
      "High-performance, scalable frontend architecture for SaaS and subscription platforms. Component systems, state management, and pixel-perfect UI.",
    icon: Code2,
    features: [
      "React, Next.js, Vue, Nuxt.js",
      "State Management (Redux, Zustand, Pinia)",
      "Payment Gateway Integration",
      "Authentication & Authorization",
    ],
    highlight: "Scalable UI",
    illustration: "/resource-allocation/building.svg",
  },
  {
    title: "Backend & API Integration",
    description:
      "Backend APIs and database-driven features built with Node.js and Express, plus seamless integration with existing backend systems and third-party APIs.",
    icon: Server,
    features: [
      "REST API Development",
      "PostgreSQL & MongoDB",
      "Auth Integration (JWT, OAuth)",
      "Third-Party API Integration",
    ],
    highlight: "Reliable Backend",
    illustration: "/resource-allocation/building.svg",
  },
  {
    title: "AI Feature Integration",
    description:
      "Adding AI capabilities to web applications — from AI-powered tools to real-time voice/speech processing using OpenAI's APIs.",
    icon: Brain,
    features: [
      "OpenAI API Integration",
      "Real-Time Speech Processing (Whisper)",
      "AI-Powered Tools (Image, Text)",
      "Prompt-Based Feature Design",
    ],
    highlight: "AI-Enabled Apps",
    illustration: "/features/think.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Reliable applications backed by solid test coverage — unit, integration, and end-to-end testing to catch issues before they reach production.",
    icon: TestTube,
    features: [
      "Jest & Vitest (Unit/Integration)",
      "Playwright (E2E Testing)",
      "Code Review & Refactoring",
      "Bug Fixing & Debugging",
    ],
    highlight: "Reliable Code",
    illustration: "/features/build.svg",
  },
];
