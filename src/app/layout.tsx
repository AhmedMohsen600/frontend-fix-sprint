import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Fix + Cleanup Sprints | Ahmed Mohsen",
  description:
    "React/Next.js UI fixes and messy code cleanup in small scoped sprints starting from $250."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
