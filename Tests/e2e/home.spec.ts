import { test, expect } from '@playwright/test';

test('homepage has Vite in the title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/Vite/);
});
