import { Building2, CreditCard, type LucideIcon } from "lucide-react";

export type UseCase = {
  title: string;
  category: string;
  eyebrow: string;
  href: string;
  icon: LucideIcon;
  summary: string;
  context: string;
  painPoints: string[];
  frontendFocus: string[];
  offerFit: string[];
  proofNote: string;
};

export const useCases = [
  {
    title: "Internal ERP and ticketing portal",
    category: "Operations dashboard",
    eyebrow: "ERP reference",
    href: "https://getbitbang.github.io/erp-internal-portal/dashboard",
    icon: Building2,
    summary:
      "A dense Arabic internal portal for tickets, requests, approvals, employee work, reports, permissions, teams, documents, and operational updates.",
    context:
      "This is the kind of frontend where dashboard polish, responsive behavior, RTL layout details, forms, state, and maintainable component structure matter more than marketing decoration.",
    painPoints: [
      "Large dashboard surfaces with many states and priorities",
      "RTL layout, Arabic typography, and dense navigation",
      "Tickets, approvals, tasks, reports, documents, teams, and permissions in one product",
      "Internal users who need clarity, speed, and predictable workflows"
    ],
    frontendFocus: [
      "Dashboard UI hierarchy",
      "Reusable cards, tables, filters, and status components",
      "Responsive internal-tool layout",
      "Clean feature/module separation",
      "Workflow states and handoff notes"
    ],
    offerFit: [
      "Frontend Fix Sprint for broken dashboard screens or responsive bugs",
      "Frontend Cleanup Sprint for messy modules, huge components, or duplicated logic",
      "Final Boss Build for a scoped admin/ERP frontend from requirements"
    ],
    proofNote:
      "Good fit for teams with internal portals, admin panels, support tools, HR systems, or workflow-heavy SaaS products."
  },
  {
    title: "Payment platform website and product frontend",
    category: "Fintech website",
    eyebrow: "GoPay reference",
    href: "https://gopay.sa/en",
    icon: CreditCard,
    summary:
      "A payment and billing website experience around invoicing, collections, payouts, dashboards, API integrations, product suites, compliance, and developer trust.",
    context:
      "This is the kind of frontend where trust, speed, responsive polish, pricing clarity, conversion, and technical credibility need to work together.",
    painPoints: [
      "Payment products need immediate trust and clear CTAs",
      "Marketing pages must explain complex financial products simply",
      "Product sections, dashboards, integrations, and compliance copy need strong structure",
      "Mobile visitors still need a polished first impression"
    ],
    frontendFocus: [
      "Premium landing page structure",
      "Responsive marketing sections",
      "Product and feature storytelling",
      "Conversion-focused CTA placement",
      "Performance-conscious frontend delivery"
    ],
    offerFit: [
      "Frontend Fix Sprint for landing page UI bugs, mobile issues, and CTA polish",
      "Frontend Cleanup Sprint for fragile marketing/frontend modules",
      "Final Boss Build for a scoped fintech or SaaS frontend from Figma"
    ],
    proofNote:
      "Good fit for fintech, SaaS, payment, billing, invoicing, B2B, and product-led websites that need to feel credible fast."
  }
] satisfies UseCase[];
