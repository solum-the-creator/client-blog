import { expect, test } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en', { timeout: 10000 });
    await page.waitForLoadState('load');
  });

  test('Navigate to Blog from "View All" in All Posts section', async ({ page }) => {
    await page.getByTestId('view-all-posts').click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('Navigate to About Us from "read more" in About Us section', async ({ page }) => {
    await page.getByTestId('read-more-about').click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('Navigate to About Us from "Discover our story" in Why we started section', async ({
    page,
  }) => {
    await page.getByTestId('discover-our-story-button').click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('Navigate to Contact page from "Join Now" in Join our team section', async ({ page }) => {
    await page.getByTestId('join-now').click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('Change locale to German', async ({ page }) => {
    const localeSelect = page.getByTestId('locale-select');

    await localeSelect.selectOption('de');

    await expect(page).toHaveURL(/\/de/);

    const someLocalizedText = page.getByTestId('logo').first();
    await expect(someLocalizedText).toHaveText('Modsen Kunden Blog');
  });
});
