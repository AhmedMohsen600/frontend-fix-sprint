# Client Delivery Workflow

## Intake

1. Collect the client request, app URL, screenshots, repo access, and deadline.
2. Confirm the work fits the Frontend Fix Sprint.
3. Convert the request into 3-5 acceptance criteria.
4. Confirm price, payment, and start date.

## Codex execution process

When a client sends requirements, paste them into Codex using the reusable prompt in `docs/reusable-client-task-prompt.md`.

Codex should:

1. Inspect the project.
2. Identify the relevant files.
3. Reproduce or reason through the issue.
4. Create a short implementation plan.
5. Implement the frontend work.
6. Run available checks.
7. Summarize the changes.
8. Prepare client delivery notes.
9. Draft the message Ahmed can send to the client.

## Ahmed's minimum human work

- Share the client request with Codex.
- Provide missing access or credentials.
- Review the final preview.
- Send the prepared client message.

## Delivery package

- Pull request or source files.
- Short summary.
- Verification notes.
- Screenshots when visual changes matter.
- Clear note about anything outside scope.
