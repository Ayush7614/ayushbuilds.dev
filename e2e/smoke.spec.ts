import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke tests", () => {
  test("homepage loads with title and hero", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Ayush Kumar/i);
    await expect(
      page.getByRole("heading", { name: /Ayush Kumar/i })
    ).toBeVisible();
    await expect(page.getByText(/RuntimeWall/i).first()).toBeVisible();
  });

  test("main navigation is present", async ({ page }) => {
    await page.goto("/");

    for (const label of [
      "About",
      "Experience",
      "Projects",
      "Open Source",
      "Blog",
      "Contact",
    ]) {
      await expect(
        page.getByRole("navigation").getByRole("link", { name: label })
      ).toBeVisible();
    }
  });

  test("hero CTAs work", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator("section").first();
    await expect(hero.getByRole("link", { name: "View Projects" })).toBeVisible();
    await expect(
      hero.getByRole("link", { name: "Book on Topmate" })
    ).toBeVisible();
  });

  test("scrolls to about section", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("navigation").getByRole("link", { name: "About" }).click();
    await expect(page.locator("#about")).toBeInViewport();
    await expect(
      page.getByRole("heading", { name: /Building bridges/i })
    ).toBeVisible();
  });

  test("projects section shows RuntimeWall", async ({ page }) => {
    await page.goto("/#projects");

    const projects = page.locator("#projects");
    await expect(
      projects.getByRole("heading", { name: "RuntimeWall" }).first()
    ).toBeVisible();
  });

  test("contact section shows email", async ({ page }) => {
    await page.goto("/#contact");

    const contact = page.locator("#contact");
    await expect(
      contact.getByRole("heading", { name: /Let's build/i })
    ).toBeVisible();
    await expect(
      contact.getByRole("link", { name: /ayushknj3@gmail.com/i })
    ).toBeVisible();
  });
});
