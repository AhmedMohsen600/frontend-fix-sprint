import { describe, expect, it } from "vitest";
import { getContactHref, getFinalBossBuildHref } from "./contact";
import {
  calculateSprintFitScore,
  cleanupIncludedItems,
  cleanupScopeRules,
  finalBossBuildScopeRules,
  formatUsd,
  notIncludedItems,
  servicePackages,
  whatICanFixItems
} from "./offer";

describe("service offer model", () => {
  it("prices the entry sprint at 250 USD and retainer at 500 USD", () => {
    expect(formatUsd(servicePackages.sprint.price)).toBe("$250");
    expect(formatUsd(servicePackages.retainer.price)).toBe("$500");
  });

  it("defines the frontend cleanup sprint as a scoped 300 dollar refactor offer", () => {
    expect(servicePackages.cleanup.name).toBe("Frontend Cleanup Sprint");
    expect(servicePackages.cleanup.price).toBe(300);
    expect(servicePackages.cleanup.priceLabel).toBe("From $300");
    expect(servicePackages.cleanup.timeline).toBe("3-5 days");
    expect(cleanupIncludedItems).toContain("Refactor 1 messy feature/module");
    expect(cleanupIncludedItems).toContain("Keep the same UI and behavior");
    expect(cleanupScopeRules).toContain("No full app rewrite");
    expect(cleanupScopeRules).toContain("Must define the exact feature/module before starting");
  });

  it("defines Final Boss Build as a premium scoped frontend build offer", () => {
    expect(servicePackages.finalBoss.name).toBe("Final Boss Build");
    expect(servicePackages.finalBoss.price).toBe(1500);
    expect(servicePackages.finalBoss.priceLabel).toBe("Custom quote");
    expect(servicePackages.finalBoss.timeline).toBe("From 2-4 weeks");
    expect(servicePackages.finalBoss.includes).toContain("Full frontend implementation");
    expect(servicePackages.finalBoss.includes).toContain("Clean handoff and deployment support");
    expect(finalBossBuildScopeRules).toContain("Project must be broken into milestones");
    expect(finalBossBuildScopeRules).toContain("Deposit required before starting");
  });

  it("scores urgent frontend polish requests as a strong fit", () => {
    const score = calculateSprintFitScore({
      bugCount: 3,
      hasResponsiveIssues: true,
      hasPerformanceIssue: true,
      hasDesignFile: true,
      desiredTurnaroundDays: 3
    });

    expect(score).toBeGreaterThanOrEqual(85);
  });

  it("scores unclear rebuild requests as a weaker fit", () => {
    const score = calculateSprintFitScore({
      bugCount: 12,
      hasResponsiveIssues: false,
      hasPerformanceIssue: false,
      hasDesignFile: false,
      desiredTurnaroundDays: 21
    });

    expect(score).toBeLessThan(60);
  });

  it("builds a frontend issue request email with a useful client brief", () => {
    const href = getContactHref();

    expect(href).toContain("subject=Frontend%20Fix%20Sprint%20Request");
    expect(decodeURIComponent(href)).toContain("Hi Ahmed,");
    expect(decodeURIComponent(href)).toContain("- Project type:");
    expect(decodeURIComponent(href)).toContain("- Tech stack:");
    expect(decodeURIComponent(href)).toContain("- Budget:");
  });

  it("builds a full frontend build request email with project scope fields", () => {
    const href = getFinalBossBuildHref();

    expect(href).toContain("subject=Final%20Boss%20Build%20Request");
    expect(decodeURIComponent(href)).toContain("I want to discuss a full frontend build.");
    expect(decodeURIComponent(href)).toContain("Do you have Figma/designs?");
    expect(decodeURIComponent(href)).toContain("Budget range:");
  });

  it("lists concrete frontend fixes and explicit exclusions", () => {
    expect(whatICanFixItems).toContain("Broken responsive layouts");
    expect(whatICanFixItems).toContain("React component bugs");
    expect(whatICanFixItems).toContain("Next.js UI issues");
    expect(whatICanFixItems).toContain("Small performance wins");

    expect(notIncludedItems).toContain("Full SaaS rebuilds");
    expect(notIncludedItems).toContain("Backend development");
    expect(notIncludedItems).toContain("Unpaid test tasks");
  });
});
