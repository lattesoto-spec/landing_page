const configuredSiteUrl = import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, "");
const siteUrl = configuredSiteUrl ?? __CAREMIN_DEPLOYMENT_URL__;
const contactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL ?? "lattesoto@gmail.com";

export const site = {
  name: "CareMin",
  title: "CareMin | Care-minute monitoring for Australian aged care",
  description:
    "Monitor residential aged care minutes, review RN coverage and role eligibility, and keep source evidence and calculation records together.",
  siteUrl,
  appUrl: import.meta.env.PUBLIC_APP_URL ?? "https://caremin-six.vercel.app",
  contactEmail,
  contactFormEndpoint:
    import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT ?? `https://formsubmit.co/${contactEmail}`,
  legalName: import.meta.env.PUBLIC_LEGAL_NAME,
  abn: import.meta.env.PUBLIC_ABN,
  analyticsDomain: import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN,
  analyticsScriptUrl:
    import.meta.env.PUBLIC_PLAUSIBLE_SCRIPT_URL ?? "https://plausible.io/js/script.js",
  buildYear: new Date().getFullYear(),
} as const;

export const primarySources = {
  careMinutes:
    "https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/care-minutes",
  quarterlyFinancialReport:
    "https://www.health.gov.au/topics/aged-care/providing-aged-care-services/reporting/quarterly-financial-report",
  rnReporting:
    "https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/24-7-rns/reporting",
  performanceStatement:
    "https://www.health.gov.au/our-work/care-minutes-registered-nurses-aged-care/care-minutes/care-minutes-performance-statement",
  performanceStatementGuidance:
    "https://www.health.gov.au/resources/collections/care-minutes-performance-statement-guidance",
  agedCareRules: "https://www.legislation.gov.au/F2025L01173/latest/text",
} as const;
