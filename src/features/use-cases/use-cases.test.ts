import { describe, expect, it } from "vitest";
import { useCases } from "./data";

describe("use cases", () => {
  it("includes the ERP portal and GoPay references", () => {
    expect(useCases).toHaveLength(2);
    expect(useCases.map((useCase) => useCase.href)).toContain(
      "https://getbitbang.github.io/erp-internal-portal/dashboard"
    );
    expect(useCases.map((useCase) => useCase.href)).toContain("https://gopay.sa/en");
  });

  it("maps each use case to frontend offers", () => {
    for (const useCase of useCases) {
      expect(useCase.offerFit.some((item) => item.includes("Frontend Fix Sprint"))).toBe(true);
      expect(useCase.offerFit.some((item) => item.includes("Frontend Cleanup Sprint"))).toBe(true);
      expect(useCase.offerFit.some((item) => item.includes("Final Boss Build"))).toBe(true);
    }
  });
});
