export type ServicePackage = {
  name: string;
  price: number;
  priceLabel?: string;
  timeline: string;
  description: string;
  includes: string[];
  bestFor: string;
};

export type SprintFitInput = {
  bugCount: number;
  hasResponsiveIssues: boolean;
  hasPerformanceIssue: boolean;
  hasDesignFile: boolean;
  desiredTurnaroundDays: number;
};

export const servicePackages = {
  sprint: {
    name: "Frontend Fix Sprint",
    price: 250,
    timeline: "3 days",
    description:
      "3-5 scoped React/Next.js UI bugs, responsiveness fixes, dashboard polish items, or small performance improvements delivered in 3 days.",
    includes: [
      "3-5 scoped frontend fixes",
      "Responsive desktop and mobile checks",
      "Clean pull request or source delivery",
      "Before/after notes",
      "Handoff summary"
    ],
    bestFor: "Founders and agencies with a visible frontend issue list that needs a clean senior fix"
  },
  cleanup: {
    name: "Frontend Cleanup Sprint",
    price: 300,
    priceLabel: "From $300",
    timeline: "3-5 days",
    description:
      "Refactor one messy React/Next.js feature or module into cleaner, maintainable structure without changing the current UI or breaking existing behavior.",
    includes: [
      "Refactor 1 messy feature/module",
      "Split huge components into smaller reusable components",
      "Extract business logic into custom hooks",
      "Clean folder structure and naming",
      "Remove duplicated code",
      "Simplify state and props",
      "Keep the same UI and behavior",
      "Notes explaining what changed"
    ],
    bestFor:
      "Teams with old or fragile React code that slows every frontend change"
  },
  retainer: {
    name: "Monthly Frontend Care",
    price: 500,
    timeline: "Monthly",
    description:
      "Two frontend fix sprints per month plus priority async support for teams that need recurring senior frontend help.",
    includes: [
      "Two fix sprints per month",
      "Priority async support",
      "Monthly UI and performance review",
      "Small ongoing dashboard or landing page improvements",
      "Delivery notes after each sprint"
    ],
    bestFor: "Teams that want a reliable frontend engineer without a full-time hire"
  },
  finalBoss: {
    name: "Final Boss Build",
    price: 1500,
    priceLabel: "Custom quote",
    timeline: "From 2-4 weeks",
    description:
      "Hire Ahmed to build your full frontend project from scratch: Figma, product idea, or requirements turned into a clean React/Next.js frontend.",
    includes: [
      "Full frontend implementation",
      "React/Next.js project setup",
      "Clean architecture",
      "Responsive UI",
      "Reusable components",
      "API integration",
      "Forms and validation",
      "Dashboard/admin panel pages if needed",
      "Performance-conscious implementation",
      "Clean handoff and deployment support"
    ],
    bestFor:
      "Founders, startups, agencies, and teams with clear requirements or Figma designs"
  }
} satisfies Record<"sprint" | "cleanup" | "retainer" | "finalBoss", ServicePackage>;

export const proofStats = [
  { label: "Sprint price", value: "$250", detail: "fixed scope" },
  { label: "Cleanup", value: "$300+", detail: "one module" },
  { label: "Delivery", value: "3 days", detail: "per sprint" },
  { label: "Retainer", value: "$500", detail: "monthly care" }
];

export const painFixes = [
  {
    pain: "Broken mobile layouts",
    fix: "Fix overflow, clipped CTAs, awkward tablet layouts, and screens that lose trust on mobile."
  },
  {
    pain: "Messy dashboards",
    fix: "Improve hierarchy, tables, empty states, spacing, and data-dense UI so the product feels finished."
  },
  {
    pain: "Launch-blocking UI bugs",
    fix: "Turn a short issue list into a clean PR, tested notes, and a client-ready handoff."
  },
  {
    pain: "Slow-feeling pages",
    fix: "Clean up small rendering, asset, layout shift, and interaction problems that make pages feel rough."
  }
];

export const whoThisIsForItems = [
  "SaaS founders with a live React/Next.js app",
  "Agencies that need overflow frontend cleanup",
  "Teams preparing a launch, demo, or client handoff"
];

export const whatICanFixItems = [
  "Broken responsive layouts",
  "Dashboard UI cleanup",
  "React component bugs",
  "Slow/heavy UI sections",
  "Messy forms",
  "Bad spacing/alignment",
  "Tailwind cleanup",
  "Next.js UI issues",
  "Landing page polish",
  "Small performance wins"
];

export const notIncludedItems = [
  "Full SaaS rebuilds",
  "Backend development",
  "Large redesigns",
  "Vague unlimited changes",
  "Unpaid test tasks"
];

export const lowRiskReasons = [
  "Fixed $250 scope before work starts",
  "3-5 specific frontend fixes, not an open-ended backlog",
  "3-day delivery window",
  "Clean PR or source files with verification notes"
];

export const cleanupPainItems = [
  "Spaghetti React code",
  "Huge components",
  "Duplicated logic",
  "Messy state management",
  "Bad folder structure",
  "Mixed UI and business logic",
  "Hard-to-maintain forms",
  "Unreadable Tailwind classes",
  "Poor component separation",
  "Slow or fragile frontend features"
];

export const cleanupIncludedItems = [
  "Refactor 1 messy feature/module",
  "Split huge components into smaller reusable components",
  "Extract business logic into custom hooks",
  "Clean folder structure",
  "Improve naming",
  "Remove duplicated code",
  "Simplify state and props",
  "Improve readability",
  "Keep the same UI and behavior",
  "Add notes explaining what changed"
];

export const cleanupScopeRules = [
  "No full app rewrite",
  "No backend work",
  "No changing business logic unless needed",
  "No redesign unless requested",
  "No unlimited refactoring",
  "Must define the exact feature/module before starting"
];

export const finalBossBuildBestFor = [
  "Founders building an MVP",
  "Startups needing a clean frontend",
  "Agencies needing frontend execution",
  "Teams with designs ready in Figma",
  "Businesses replacing a weak frontend"
];

export const finalBossBuildScopeRules = [
  "Requires clear requirements or Figma/design direction",
  "Backend is not included unless agreed separately",
  "No vague unlimited pages",
  "No build everything without scope",
  "Project must be broken into milestones",
  "Deposit required before starting"
];

export const beforeAfterValue = [
  {
    before: "A page feels unfinished on mobile or inside the dashboard.",
    after: "The visible issue list is fixed, checked, and ready for client review."
  },
  {
    before: "Small UI bugs sit in the backlog because nobody owns them.",
    after: "Ahmed turns 3-5 specific issues into a focused pull request."
  },
  {
    before: "The buyer is unsure if a bigger contract is worth it.",
    after: "A $250 sprint proves the workflow before monthly care is discussed."
  }
];

export const processSteps = [
  {
    title: "Scope",
    detail:
      "Send the URL, repo, screenshots, issue list, or Figma file. I confirm the 3-5 fixes that fit one sprint."
  },
  {
    title: "Fix",
    detail:
      "I implement the React/Next.js fixes, keep the change set focused, and check the affected screens."
  },
  {
    title: "Deliver",
    detail:
      "You receive the PR or source files, verification notes, before/after notes, and a short handoff summary."
  }
];

export const faqs = [
  {
    question: "What stack do you work with?",
    answer:
      "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, Zustand, TanStack Query, React Hook Form, REST APIs, and GraphQL."
  },
  {
    question: "Can you work from Figma?",
    answer:
      "Yes. A scoped screen can be converted into React/Next.js, or an existing implementation can be polished to better match the design."
  },
  {
    question: "What counts as one sprint?",
    answer:
      "A good sprint is 3-5 related frontend fixes: UI bugs, responsive issues, dashboard polish, small performance cleanup, or a focused page implementation."
  },
  {
    question: "What is outside scope?",
    answer:
      "Full rebuilds, backend architecture, complex auth/payment systems, and unlimited revisions are outside the fixed sprint."
  }
];

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateSprintFitScore(input: SprintFitInput) {
  let score = 35;

  score += input.bugCount > 0 && input.bugCount <= 5 ? 25 : 5;
  score += input.hasResponsiveIssues ? 15 : 0;
  score += input.hasPerformanceIssue ? 10 : 0;
  score += input.hasDesignFile ? 10 : 0;
  score += input.desiredTurnaroundDays <= 3 ? 20 : input.desiredTurnaroundDays <= 7 ? 10 : 0;
  score -= input.bugCount > 8 ? 10 : 0;

  return Math.max(0, Math.min(score, 100));
}
