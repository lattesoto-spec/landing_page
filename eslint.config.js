import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      ".astro/**",
      "dist/**",
      "node_modules/**",
      "playwright-report/**",
      "screenshots/**",
      "test-results/**",
    ],
  },
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
];
