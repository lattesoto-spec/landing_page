/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_APP_URL?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_CONTACT_FORM_ENDPOINT?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_PLAUSIBLE_SCRIPT_URL?: string;
  readonly PUBLIC_LEGAL_NAME?: string;
  readonly PUBLIC_ABN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __CAREMIN_DEPLOYMENT_URL__: string;
