const contactWhatsappNumber =
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER ?? "201096972225";

export const frontendIssueWhatsappMessage = `Hi Ahmed,

I need help with:
- Project type:
- Tech stack:
- Issue:
- Deadline:
- Budget:`;

export const finalBossBuildWhatsappMessage = `Hi Ahmed,

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
  message = frontendIssueWhatsappMessage
) {
  const sanitizedNumber = contactWhatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(`${subject}\n\n${message}`);

  return `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
}

export function getFinalBossBuildHref() {
  return getContactHref("Final Boss Build Request", finalBossBuildWhatsappMessage);
}
