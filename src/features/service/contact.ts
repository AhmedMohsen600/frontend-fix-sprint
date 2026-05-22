const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "replace-with-your-email@example.com";

export const frontendIssueEmailBody = `Hi Ahmed,

I need help with:
- Project type:
- Tech stack:
- Issue:
- Deadline:
- Budget:`;

export const finalBossBuildEmailBody = `Hi Ahmed,

I want to discuss a full frontend build.

Project type:
Current stage:
Do you have Figma/designs?
Main pages/features:
Tech stack:
Deadline:
Budget range:`;

export function getContactHref(
  subject = "Frontend Fix Sprint Request",
  body = frontendIssueEmailBody
) {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  return `mailto:${contactEmail}?subject=${encodedSubject}&body=${encodedBody}`;
}

export function getFinalBossBuildHref() {
  return getContactHref("Final Boss Build Request", finalBossBuildEmailBody);
}
