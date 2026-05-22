const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "replace-with-your-email@example.com";

export const frontendIssueEmailBody = `Hi Ahmed,

I need help with:
- Project type:
- Tech stack:
- Issue:
- Deadline:
- Budget:`;

export function getContactHref(subject = "Frontend Fix Sprint Request") {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(frontendIssueEmailBody);

  return `mailto:${contactEmail}?subject=${encodedSubject}&body=${encodedBody}`;
}
