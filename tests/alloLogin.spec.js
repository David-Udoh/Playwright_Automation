import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://allo-frontend.vercel.app/login');
  // await page.screenshot({ path: 'screenshot.png' });
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kolop@hotmail.com');
  // await page.getByRole('link', { name: 'Forgot password' }).click();
  // await page.getByPlaceholder('Email').click();
  // await page.getByPlaceholder('Email').fill('kolop@hotmail.com');
  // await page.getByRole('button', { name: 'Send Code' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('k@l@p6A&&');
  // use only when timeouts is exceeded for chromium
  await page.waitForSelector('button', { name: 'Login' }, {timeout: 5000})
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});