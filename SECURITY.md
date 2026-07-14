# Security Policy

## Report a vulnerability

Do not open a public issue containing credentials, private learner data, exploit instructions, or payment details. Contact the repository owner privately with:

- A concise impact description.
- Reproduction steps using synthetic data.
- Affected route, component, or service.
- Suggested containment when known.

## Security commitments

- No default production credentials.
- No raw secrets in code, logs, screenshots, fixtures, or documentation.
- Verified authorization at every mutation boundary.
- Workspace-scoped data isolation.
- Payment webhook signature verification.
- Upload type, size, and malware controls.
- AI input redaction and retention limits.
- Human confirmation before future external actions.
- Security regression tests for every confirmed defect.

See `docs/architecture/security-threat-model.md` and `docs/architecture/privacy-retention.md`.
