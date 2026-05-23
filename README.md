# Frontend Fix Sprint

A productized frontend service system and demo app for Ahmed Mohsen, built to help close frontend fix, cleanup, full build, or monthly care clients.

The repo includes:

- A Next.js service landing page.
- A polished SaaS dashboard demo.
- Sales copy, outreach messages, onboarding docs, delivery checklists, and reusable client prompts.
- Tests for the service offer model.

## Offers

### Frontend Fix Sprint

3-5 scoped React/Next.js UI bugs, responsiveness fixes, dashboard polish items, or small performance improvements delivered in 3 days.

Price: 250 USD/project.

### Frontend Cleanup Sprint

Refactor one messy React/Next.js feature or module into clean, maintainable, scalable structure without changing the current UI or breaking existing behavior.

Best for spaghetti React code, huge components, duplicated logic, messy state management, bad folder structure, mixed UI/business logic, hard-to-maintain forms, unreadable Tailwind classes, poor component separation, and slow or fragile frontend features.

Price: from 300 USD/project. Larger cleanup scopes can be 400-500 USD.

Delivery: 3-5 days for one scoped feature/module.

### Monthly Frontend Care

500 USD/month for two monthly frontend sprints plus priority support.

Monthly care can include UI fixes, cleanup work, dashboard polish, and small code quality reviews.

### Final Boss Build

Hire Ahmed to build the full frontend project from scratch when the client needs more than a small sprint.

Best for founders building an MVP, startups needing a clean frontend, agencies needing frontend execution, teams with Figma ready, or businesses replacing a weak frontend.

Includes React/Next.js setup, clean architecture, responsive UI, reusable components, API integration, forms and validation, dashboard/admin panel pages if needed, performance-conscious implementation, clean handoff, and deployment support.

Price: custom quote, starting from 1,500 USD.

Delivery: timeline depends on scope. Small MVPs or landing projects can start from 2-4 weeks.

Scope rules: requires clear requirements or Figma/design direction, backend is not included unless agreed separately, no vague unlimited pages, milestones required, and deposit required before starting.

## Run Locally

Install dependencies:

```bash
npm install
```

Set your WhatsApp contact number:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and set `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER`.

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is busy, Next.js will print the available local URL in the terminal.

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run test -- --run
npm run build
```

## Deploy To Vercel

Use this for production launch:

1. Push this repo to GitHub.
2. Connect/import the repo in Vercel.
3. Add `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER` in Vercel project environment variables.
4. Deploy with the default Next.js settings.
5. Open the live site and click the main CTA.
6. Confirm the CTA opens a WhatsApp chat to Ahmed.
7. Add the live link to LinkedIn Featured and outreach messages.

## WhatsApp Contact Setup

The primary CTA uses `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER` to open a WhatsApp chat.

Local setup:

```bash
cp .env.example .env.local
```

Then set:

```text
NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER=201096972225
```

The WhatsApp message includes:

```text
Frontend Fix Sprint Request

Hi Ahmed,

I need help with:
- Project type:
- Tech stack:
- Issue:
- Deadline:
- Budget:
```

The full build CTA uses:

```text
Final Boss Build Request

Hi Ahmed,

I want to discuss a full frontend build.

Project type:
Current stage:
Do you have Figma/designs?
Main pages/features:
Tech stack:
Deadline:
Budget range:
```

## How To Use This To Sell

1. Deploy the site.
2. Open `/demo` and use it as proof when messaging leads.
3. Send the short DMs from `docs/outreach-messages.md`.
4. Track every lead in `docs/lead-tracker-template.md`.
5. When someone replies, send `docs/client-proposal.md`.
6. Qualify whether they need a Fix Sprint, Cleanup Sprint, Final Boss Build, or Monthly Care.
7. When a paid task arrives, paste the project details into Codex using `docs/paid-task-codex-prompt.md`.

## What Ahmed Should Do Next

1. Set `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER`.
2. Deploy to Vercel.
3. Send 10 founder DMs and 10 agency/CTO DMs from `docs/outreach-messages.md`.
4. Add each lead to `docs/lead-tracker-template.md`.
5. Follow up after 2-4 days.
6. Close the first qualified lead with either a 250 USD Fix Sprint or 300-500 USD Cleanup Sprint.
7. After successful delivery, offer the 500 USD/month option only if they have recurring frontend work.
8. Only pitch Final Boss Build when the client clearly needs a larger scoped frontend project and can define milestones.

## Launch Now

1. Set the WhatsApp env:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```text
NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER=201096972225
```

2. Run locally:

```bash
npm install
npm run dev
```

3. Deploy to Vercel:

- Push the repo to GitHub.
- Connect/import it in Vercel.
- Add `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBER` in Vercel environment variables.
- Deploy with the default Next.js settings.
- Open the deployed site and test the WhatsApp CTA.

4. Add the deployed URL to LinkedIn:

- Add it to Featured.
- Add "React/Next.js Frontend Fix + Cleanup Sprints" to your headline or About section.
- Link directly to the dashboard demo when messaging buyers.

5. Send outreach messages:

- Use `docs/launch-assets.md` for fast copy.
- Use `docs/outreach-messages.md` for more variations.
- Send 20 targeted messages/day during launch week.

6. Track replies:

- Use `docs/lead-tracker-template.md`.
- Mark leads as not contacted, replied, qualified, proposal sent, won, lost, or not a fit.

7. Use the paid-task prompt after a client replies:

- Confirm offer type, scope, and payment first.
- Paste the real client task into `docs/paid-task-codex-prompt.md`.
- Use Codex to inspect, implement, test, and prepare delivery notes.

## Project Structure

```text
docs/
  money-strategy.md
  sellable-offer.md
  landing-page-copy.md
  sales-messages.md
  client-delivery-workflow.md
  reusable-client-task-prompt.md
  7-day-launch-plan.md
src/
  app/
    page.tsx
    demo/page.tsx
  components/
  features/
    dashboard-demo/
    service/
```

## Client Workflow

When a paid frontend task arrives, use `docs/paid-task-codex-prompt.md` and paste the client request into Codex. Codex should inspect the codebase, implement the work, test it, summarize changes, and prepare the delivery message.
