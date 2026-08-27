import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const publicPages = [
  "/",
  "/resources",
  "/care-minutes-software",
  "/care-minutes-performance-statement",
  "/24-7-rn-coverage",
  "/qfr-care-minutes-reporting",
  "/care-minutes-audit-preparation",
  "/care-minutes-calculator",
  "/privacy",
  "/terms",
  "/404",
];

for (const path of publicPages) {
  test(`${path} has no serious or critical accessibility violations`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const blockingViolations = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );

    expect(blockingViolations).toEqual([]);
  });
}

test("mobile navigation opens, closes, and exposes its destinations", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const toggle = page.locator("[data-menu-toggle]");
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAccessibleName("Open navigation");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Close navigation");
  const primaryNavigation = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNavigation).toBeVisible();
  await expect(
    primaryNavigation.getByRole("link", { name: "Capabilities", exact: true }),
  ).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("walkthrough form has accessible controls and required consent", async ({ page }) => {
  await page.goto("/#contact");

  const form = page.locator("form.contact-form");

  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("Work email")).toHaveAttribute("type", "email");
  await expect(page.getByLabel("Organisation")).toBeVisible();
  await expect(page.getByLabel("Number of homes")).toBeVisible();
  await expect(page.getByLabel("What would you like to see?")).toHaveAttribute(
    "aria-describedby",
    "message-hint",
  );
  await expect(page.getByLabel(/I agree that CareMin/)).toHaveAttribute("required", "");
  await expect(page.getByRole("button", { name: "Arrange walkthrough" })).toBeVisible();
  await expect(form).toHaveAttribute("action", /^https:\/\/formsubmit\.co\/[a-f0-9]{32}$/);
  await expect(form.locator('input[name="_next"]')).toHaveAttribute("value", /\/thank-you$/);
  await expect(page.getByRole("link", { name: "demo@caremin.care" })).toHaveAttribute(
    "href",
    "mailto:demo@caremin.care",
  );
});

test("sign in displays a loading transition before leaving the site", async ({ page }) => {
  await page.goto("/");

  const signIn = page.locator(".hero [data-app-link]");
  await signIn.evaluate((link) => link.setAttribute("href", "#test-app-loading"));
  await signIn.click();

  const transition = page.locator("[data-app-transition]");
  await expect(transition).toBeVisible();
  await expect(transition.getByRole("heading", { name: "Opening CareMin" })).toBeVisible();
  await expect(transition.getByText("Your workspace will be ready shortly.")).toBeVisible();
  await expect(page.locator("body")).toHaveAttribute("data-app-transitioning", "");
  await expect(page.locator("body")).toHaveAttribute("aria-busy", "true");
});

test("error page provides recovery actions without duplicating site chrome", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/404");

  await expect(page.getByRole("heading", { name: "We couldn’t find that page." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go to the homepage" })).toHaveAttribute("href", "/");
  await expect(page.getByRole("link", { name: "Browse resources" })).toHaveAttribute(
    "href",
    "/resources",
  );
  await expect(page.getByRole("link", { name: "Let us know." })).toHaveAttribute(
    "href",
    "mailto:support@caremin.care",
  );
  await expect(page.locator(".site-header, .site-footer")).toHaveCount(0);

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("landing page does not overflow at 320 pixels", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});

test("resource pages do not overflow at 320 pixels", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });

  for (const path of [
    "/resources",
    "/care-minutes-performance-statement",
    "/care-minutes-calculator",
  ]) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth, path).toBeLessThanOrEqual(dimensions.clientWidth);
  }
});

test("calculator produces a labelled estimate and can be reset", async ({ page }) => {
  await page.goto("/care-minutes-calculator");

  await page.getByLabel("Total eligible direct-care worked hours").fill("15420");
  await page.getByLabel("RN worked hours").fill("3200");
  await page.getByLabel("EN worked hours").fill("680");
  await page.getByLabel("Occupied bed days").fill("4380");
  await page.getByLabel("Home total care-minute target").fill("215");
  await page.getByLabel("Home RN care-minute target").fill("44");
  await page.getByRole("button", { name: "Calculate position" }).click();

  await expect(page.locator('[data-result="totalMinutes"]')).toHaveText("211.2");
  await expect(page.locator('[data-result="rnMinutes"]')).toHaveText("43.8");
  await expect(page.locator('[data-result="rnEnMinutes"]')).toHaveText("53.2");
  await expect(page.locator("[data-copy-results]")).toBeEnabled();

  await page.getByRole("button", { name: "Clear" }).click();
  await expect(page.locator('[data-result="totalMinutes"]')).toHaveText("—");
});
