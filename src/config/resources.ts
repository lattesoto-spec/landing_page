export type ResourceEntry = {
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "Product" | "Reporting guide" | "Audit guide" | "Free tool";
  updated: string;
};

export const resources: ResourceEntry[] = [
  {
    path: "/care-minutes-software",
    title: "Care Minutes Software for Australian Residential Aged Care",
    shortTitle: "Care minutes software",
    description:
      "See how CareMin brings worked hours, occupied bed days, role decisions, RN coverage, calculations, and supporting evidence into one controlled record.",
    category: "Product",
    updated: "11 August 2026",
  },
  {
    path: "/care-minutes-performance-statement",
    title: "Care Minutes Performance Statement: 2025–26 Audit Guide",
    shortTitle: "Care Minutes Performance Statement",
    description:
      "Understand the first externally audited statement, the reporting periods it covers, the data it contains, and the records an auditor may request.",
    category: "Reporting guide",
    updated: "11 August 2026",
  },
  {
    path: "/24-7-rn-coverage",
    title: "24/7 RN Coverage Reporting for Residential Aged Care",
    shortTitle: "24/7 RN coverage",
    description:
      "A practical guide to monthly RN coverage reporting, reportable absences, evidence, and the distinction between coverage and RN care minutes.",
    category: "Reporting guide",
    updated: "11 August 2026",
  },
  {
    path: "/qfr-care-minutes-reporting",
    title: "QFR Care Minutes Reporting: Labour Hours, Roles and Reconciliation",
    shortTitle: "QFR care minutes reporting",
    description:
      "Connect quarterly labour-hours reporting with worked care minutes, occupied bed days, home-specific targets, and year-end reconciliation.",
    category: "Reporting guide",
    updated: "11 August 2026",
  },
  {
    path: "/care-minutes-audit-preparation",
    title: "Care Minutes Audit Preparation: Evidence and Control Checklist",
    shortTitle: "Care minutes audit preparation",
    description:
      "Prepare the source records, calculations, controls, and explanations that support a Care Minutes Performance Statement audit.",
    category: "Audit guide",
    updated: "11 August 2026",
  },
  {
    path: "/care-minutes-calculator",
    title: "Australian Aged Care Minutes Calculator",
    shortTitle: "Care minutes calculator",
    description:
      "Estimate total, RN-only, and RN-plus-EN minutes per occupied bed day and quantify the hours required to close a target gap.",
    category: "Free tool",
    updated: "11 August 2026",
  },
];

export const resourceByPath = Object.fromEntries(resources.map((entry) => [entry.path, entry]));
