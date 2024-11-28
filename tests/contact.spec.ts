import { expect, test } from '@playwright/test';

test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/contact', { timeout: 10000 });
    await page.waitForLoadState('load');
  });

  test('Contact form renders correctly', async ({ page }) => {
    await expect(page.getByTestId('contact-form')).toBeVisible();
    await expect(page.getByTestId('contact-name-input')).toBeVisible();
    await expect(page.getByTestId('contact-email-input')).toBeVisible();
    await expect(page.getByTestId('contact-query-select')).toBeVisible();
    await expect(page.getByTestId('contact-message-textarea')).toBeVisible();
    await expect(page.getByTestId('contact-submit-button')).toBeVisible();
  });

  test('Submitting form with valid data shows success message', async ({ page }) => {
    await page.getByTestId('contact-name-input').fill('John Doe');
    await page.getByTestId('contact-email-input').fill('john.doe@example.com');
    await page.getByTestId('contact-query-select').selectOption('general');
    await page.getByTestId('contact-message-textarea').fill('This is a test message.');

    await page.getByTestId('contact-submit-button').click();
  });

  test('Submitting form with invalid email shows error message', async ({ page }) => {
    await page.getByTestId('contact-name-input').fill('John Doe');
    await page.getByTestId('contact-email-input').fill('test@test');
    await page.getByTestId('contact-query-select').selectOption('general');
    await page.getByTestId('contact-message-textarea').fill('This is a test message.');

    await page.getByTestId('contact-submit-button').click();

    await expect(page.getByText('Invalid email address')).toBeVisible();
  });

  test('Empty fields show validation errors', async ({ page }) => {
    await page.getByTestId('contact-submit-button').click();

    await expect(page.getByText('Full Name is required')).toBeVisible();
    await expect(page.getByText('Invalid email address')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });
});
