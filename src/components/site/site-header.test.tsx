import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("opens a mobile menu with navigation links and WhatsApp CTA", () => {
    render(<SiteHeader />);

    const openButton = screen.getByRole("button", { name: "Open menu" });
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(openButton);

    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");

    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(within(mobileNav).getByRole("link", { name: "Use cases" })).toHaveAttribute(
      "href",
      "/use-cases"
    );
    expect(
      within(mobileNav).getByRole("link", { name: "Send frontend issue" })
    ).toHaveAttribute("href", expect.stringContaining("https://wa.me/201096972225"));

    const useCasesLink = within(mobileNav).getByRole("link", { name: "Use cases" });
    useCasesLink.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(useCasesLink);

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});
