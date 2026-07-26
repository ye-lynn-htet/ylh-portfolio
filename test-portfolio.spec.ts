import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('should load the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Ye Lynn Htet/);
  });

  test('should display hero section', async ({ page }) => {
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText('Ye Lynn Htet');
  });

  test('should have working navigation', async ({ page }) => {
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(4);
  });

  test('should display skills section', async ({ page }) => {
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
  });

  test('should display experience section', async ({ page }) => {
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
  });

  test('should display projects section', async ({ page }) => {
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should have accessible skip link', async ({ page }) => {
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toHaveClass(/sr-only/);
  });

  test('should scroll to section when clicking nav link', async ({ page }) => {
    await page.click('a[href="#skills"]');
    await page.waitForTimeout(500);
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
  });

  test('should have proper mobile navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const mobileNav = page.locator('[aria-label="Quick navigation"]');
    await expect(mobileNav).toBeVisible();
  });
});
