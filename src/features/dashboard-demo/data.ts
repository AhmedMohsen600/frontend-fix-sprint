import {
  Activity,
  BadgeCheck,
  Bug,
  Gauge,
  LineChart,
  MonitorSmartphone,
  PanelTop,
  Rocket,
  ShieldCheck,
  Sparkles,
  type LucideIcon
} from "lucide-react";

export type DemoMetric = {
  label: string;
  value: string;
  change: string;
  tone: "mint" | "sky" | "coral" | "gold";
  icon: LucideIcon;
};

export type DemoFinding = {
  title: string;
  before: string;
  after: string;
  status: "fixed" | "improved" | "queued";
};

export const demoMetrics: DemoMetric[] = [
  {
    label: "Activation rate",
    value: "42.8%",
    change: "+8.4%",
    tone: "mint",
    icon: Activity
  },
  {
    label: "Trial revenue",
    value: "$18.6k",
    change: "+12.1%",
    tone: "sky",
    icon: LineChart
  },
  {
    label: "Open UI bugs",
    value: "7",
    change: "-46%",
    tone: "coral",
    icon: Bug
  },
  {
    label: "Performance score",
    value: "94",
    change: "+17",
    tone: "gold",
    icon: Gauge
  }
];

export const polishFindings: DemoFinding[] = [
  {
    title: "Mobile billing screen overflow",
    before: "Plan cards clipped at 390px width and hid the upgrade CTA.",
    after: "Cards now stack cleanly with stable button placement.",
    status: "fixed"
  },
  {
    title: "Dashboard hierarchy felt flat",
    before: "All panels used the same visual weight, making priority unclear.",
    after: "Revenue, activation, and risk signals now scan in order.",
    status: "improved"
  },
  {
    title: "Empty states lacked next action",
    before: "Setup checklist showed blank panels after integrations failed.",
    after: "Added recovery copy, status labels, and a clear retry action.",
    status: "fixed"
  },
  {
    title: "Chart labels crowded on tablet",
    before: "Labels overlapped between 768px and 920px.",
    after: "Responsive tick density and wider touch targets.",
    status: "improved"
  }
];

export const funnelRows = [
  { label: "Visitors", value: "18,420", width: "100%" },
  { label: "Signup", value: "3,860", width: "72%" },
  { label: "Activated", value: "1,652", width: "48%" },
  { label: "Paid", value: "314", width: "24%" }
];

export const sprintBacklog = [
  { task: "Fix pricing table on mobile", impact: "High", owner: "Ahmed", state: "Done" },
  { task: "Polish onboarding checklist states", impact: "High", owner: "Ahmed", state: "Done" },
  { task: "Reduce layout shift on hero", impact: "Medium", owner: "Ahmed", state: "Done" },
  { task: "Audit dashboard table density", impact: "Medium", owner: "Client", state: "Review" }
];

export const demoCapabilities = [
  {
    title: "Dashboard polish",
    detail: "Dense SaaS screens with clearer hierarchy, states, spacing, and responsive behavior.",
    icon: PanelTop
  },
  {
    title: "Responsive fixes",
    detail: "Mobile and tablet cleanup for layouts that almost work but still feel unfinished.",
    icon: MonitorSmartphone
  },
  {
    title: "Launch support",
    detail: "Focused frontend fixes, handoff notes, and pragmatic improvements before release.",
    icon: Rocket
  },
  {
    title: "Quality pass",
    detail: "Lint, type checks, build checks, manual UI review, and clear delivery notes.",
    icon: ShieldCheck
  },
  {
    title: "UI improvement",
    detail: "Practical polish that improves scanability, action clarity, and perceived product quality.",
    icon: Sparkles
  },
  {
    title: "Clean handoff",
    detail: "Scoped implementation, PR summary, test notes, and next-sprint recommendations.",
    icon: BadgeCheck
  }
];
