import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
});

test("header logo and button keep space from the screen edges", async ({ page }) => {
  const logo = await page.locator("header a[aria-label$='home']").boundingBox();
  const button = await page.locator("header a", { hasText: "Contact Us" }).first().boundingBox();
  const width = page.viewportSize().width;

  expect(logo.x).toBeGreaterThanOrEqual(16);
  if (width >= 640) expect(width - (button.x + button.width)).toBeGreaterThanOrEqual(16);
});

test("page uses Avenir Next", async ({ page }) => {
  const family = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
  expect(family).toContain("Avenir Next");
});

test("sections share the same left edge as the logo", async ({ page }) => {
  const logo = await page.locator("header a[aria-label$='home']").boundingBox();
  const how = await page.locator("#how-it-works .site-container").boundingBox();
  const story = await page.locator("#why-story .site-container").boundingBox();

  expect(Math.abs(how.x - logo.x)).toBeLessThan(2);
  expect(Math.abs(story.x - logo.x)).toBeLessThan(2);
});

test("content sections have consistent vertical padding", async ({ page }) => {
  const padding = (selector) =>
    page.locator(selector).evaluate((el) => {
      const s = getComputedStyle(el);
      return [s.paddingTop, s.paddingBottom];
    });

  expect(await padding("#how-it-works")).toEqual(await padding("#why-story"));
});

test("there is clear space between How It Works and the story paragraph", async ({ page }) => {
  const how = await page.locator("#how-it-works .site-container").boundingBox();
  const para = await page.locator("#why-story p").boundingBox();
  const gap = para.y - (how.y + how.height);

  expect(gap).toBeGreaterThanOrEqual(120);
});

test("why heading is vertically centred while pinned", async ({ page }) => {
  const section = page.locator("#why");
  await section.scrollIntoViewIfNeeded();
  const top = await section.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
  await page.evaluate((y) => window.scrollTo(0, y + 200), top);
  await page.waitForTimeout(300);

  const box = await page.locator("#why h2").boundingBox();
  const centre = box.y + box.height / 2;
  const viewport = page.viewportSize().height;

  expect(Math.abs(centre - viewport / 2)).toBeLessThan(40);
});

test("why heading keeps its first-line indent and is left aligned", async ({ page }) => {
  const style = await page.locator("#why h2").evaluate((el) => {
    const s = getComputedStyle(el);
    return { indent: s.textIndent, align: s.textAlign };
  });

  expect(parseFloat(style.indent)).toBeGreaterThan(0);
  expect(["left", "start"]).toContain(style.align);
});

test("why reveal section is not excessively long", async ({ page }) => {
  const { height } = await page.locator("#why").boundingBox();
  expect(height / page.viewportSize().height).toBeLessThanOrEqual(2);
});

test("visual snapshots of each section", async ({ page }, testInfo) => {
  const steps = [
    ["hero", 0],
    ["hero-collage", 700],
    ["why-start", null, "#why"],
    ["how-it-works", null, "#how-it-works"],
    ["why-story", null, "#why-story"],
  ];

  for (const [name, y, selector] of steps) {
    if (selector) await page.locator(selector).scrollIntoViewIfNeeded();
    else await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `test-results/${testInfo.project.name}-${name}.png` });
  }
});
