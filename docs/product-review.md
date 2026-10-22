# OptiMediCare and WACentral product review

## Read-only boundary

The existing applications in `/srv/ssdc` and `/srv/wa-central` were inspected read-only. No application builds, package installs, source edits, migrations, service restarts, login requests, or production API calls were performed in either product directory. Only `/srv/landing-page` and temporary review tools were written.

The screenshots render the existing production frontend builds through a localhost-only static file server. That server reads the application files and refuses API and write requests. Browser request interception supplies synthetic data to the original interfaces and prevents production API access. WACentral's local preview uses a deliberately invalid local-only session marker; it is never sent to a production server.

Screenshots represent the real application interfaces, with demonstration data. They are labelled accordingly on the public product pages. Statistics, amounts, names, accounts, statuses, phone routes, and messages shown are examples, not customer records, customer endorsements, measured performance, or evidence of a production connection.

Verification after capture and page implementation: all 999 recorded frontend source/build files matched their original SHA-256 hashes, both original Git working trees remained clean, and all 31 intercepted demo API requests used GET.

## Naming and navigation

The OMC application identifies itself as **OptiMediCare Diagnostics Software** in its frontend title and authentication branding. The marketing product name was corrected to OptiMediCare. Its canonical page is `/products/optimedicare/`; the former `/products/optimedicate/` address redirects there.

The app entry links were confirmed from the existing Nginx routing configuration:

- OptiMediCare: `https://ssdclabs.online/`
- WACentral: `https://wacentral.sincerity.co.in/`

## Captures

All screenshots are unaltered 1600 × 1000 browser viewport captures in WebP format.

| Asset in `public/product-screens/` | Original application route | Content                                                                                         |
| ---------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------- |
| `omc-dashboard.webp`               | `/dashboard`               | Billing, reporting, WhatsApp activity, test volumes, trends, recent work                        |
| `omc-patients.webp`                | `/dashboard/patient`       | Patient directory and visit workflow                                                            |
| `omc-registration.webp`            | `/dashboard/patient/new`   | Patient details, test selection, bill summary, partner lab charges, referrals, payment controls |
| `omc-reports.webp`                 | `/dashboard/reports`       | Report directory and report actions                                                             |
| `omc-accounts.webp`                | `/dashboard/accounts`      | Revenue, dues, referral amounts, filters, export controls, account entries                      |
| `wacentral-dashboard.webp`         | `/saas/dashboard`          | Developer overview, clients, phone routes, webhook configuration                                |
| `wacentral-clients.webp`           | `/saas/clients`            | Managed client directory                                                                        |
| `wacentral-chatbot.webp`           | `/saas/chatbots`           | Chatbot routing modes and the built-in server-side flow                                         |

No save, send, create-account, publish, connect-number, export, or database mutation action was used during capture. Screens are not AI-generated or redrawn mockups.

## Source evidence used for the descriptions

OptiMediCare:

- `ssdc-frontend-react/src/index.tsx`, `dist/index.html`: application name.
- `src/dashboardRoutes.ts`: patient, results, reports, accounts, test catalogue, doctor, and settings workflows.
- `src/home/sub-tasks/1-home.tsx`: dashboard metrics and chart categories.
- `src/home/sub-tasks/pt/new.tsx`: registration, tests/packages, bill amounts, external lab charges, and referrals.
- `src/home/sub-tasks/pt/enter-values.tsx`, `pt/reports.tsx`: result entry, reports, print and WhatsApp preparation.
- `src/home/sub-tasks/4-accounts.tsx`: accounts, dues, filters, and exports.

WACentral:

- `frontend/src/App.tsx`: super-admin, SaaS developer, and business workspace routes.
- `frontend/src/saas/pages/SaasDashboard.tsx`, `SaasClients.tsx`: managed client and integration workspaces.
- `frontend/src/saas/pages/SaasChatbot.tsx`: flow editing, routing modes, and conversation previews.
- `frontend/src/shared/api/client.ts`: phone, webhook, client, and messaging API integrations.
- `backend/src/middleware/integrationAuth.ts`: HMAC-signed integration request verification.

Feature descriptions reflect source/UI inspection, not an end-to-end test of production delivery or integrations. No performance, uptime, or customer-count claims were added.

## Expanded OptiMediCare review — 22 October 2026

The marketing page was checked again against all laboratory navigation areas, rather than treating the dashboard as the entire product. The additional review covered patient registration and visits, result entry, report viewing and printing, bills and payment records, accounts and due patients, export views, lab-to-lab work, individual tests and parameters, groups and hospital packages, referring doctors, lab identity and signatures, print preferences, password/authenticator settings, and WhatsApp connection settings. Source/UI inspection establishes what is present; it does not assert production delivery performance or clinical correctness.

| Area             | Additional source evidence                                                           | Website explanation                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Result entry     | `home/sub-tasks/pt/enter-values.tsx`                                                 | Selected tests, result fields, units, configured reference ranges, out-of-range highlighting, pending entries |
| Catalogue        | `5-tests.tsx`, `test/new-tests.tsx`, `test/new-group.tsx`, `test/hospital_tests.tsx` | Tests, groups, packages, shortcuts, categories, parameters, prices, active status                             |
| Doctors          | `6-doctor.tsx`, `dr/new-doctor.tsx`                                                  | Doctor profiles, report display names, referral rates and amounts                                             |
| Accounts         | `4-accounts.tsx`, `4-accounts-due.tsx`, `export.tsx`, `8-bills.tsx`                  | Payments, dues, date/doctor filters, account entries and exports                                              |
| External work    | `8-lab-to-lab.tsx`                                                                   | Partner laboratory charges and referral/commission entries                                                    |
| Report identity  | `7-settings.tsx`, `pt/reports.tsx`                                                   | Lab contact details, report formatting, print positions, signature image on downloaded/WhatsApp PDFs          |
| Account settings | `7-settings.tsx`                                                                     | Password and configurable authenticator protection, without certification claims                              |
| WhatsApp         | `7-settings-whatsapp.tsx`, `pt/reports.tsx`                                          | Connection setup and report-sharing workflow, with configuration requirements made explicit                   |

Three additional original-interface screenshots were captured through the same isolated, read-only preview: `omc-results.webp`, `omc-tests.webp`, and `omc-settings.webp`. The report-entry screen uses a synthetic patient and blank result fields with explicitly illustrative units/reference text. No real patient information or clinical results are used. All 15 additional intercepted application API requests were GET; no save, send, export, credential configuration, or other write action was performed.

The page now presents registration → result entry → reporting, followed by daily operations and lab setup. Twelve capability explanations are grouped under four clear topics rather than one undifferentiated feature list. The screenshots remain enlargeable, and the page uses restrained scroll entrance animations with a reduced-motion alternative.
