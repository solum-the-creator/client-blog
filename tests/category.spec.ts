import { expect, test } from '@playwright/test';

test.describe('Category Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/category/technology', { timeout: 10000 });
    await page.waitForLoadState('load');
  });

  test('Displays posts for selected category', async ({ page }) => {
    const postTitles = await page.locator('[data-testid="post-title"]').allTextContents();
    expect(postTitles.length).toBeGreaterThan(0);

    const categoryHeading = await page.locator('[data-testid="category-heading"]').textContent();
    expect(categoryHeading).toBe('technology');
  });

  test('Search by tag updates post list', async ({ page }) => {
    const searchInput = page.getByTestId('tag-search-input');
    await searchInput.fill('business');

    const searchResult = page.getByTestId('tag-search-result').first();
    await searchResult.click();

    const postTitles = await page.locator('[data-testid="post-title"]').allTextContents();
    expect(postTitles.length).toBeGreaterThan(0);
  });
});
