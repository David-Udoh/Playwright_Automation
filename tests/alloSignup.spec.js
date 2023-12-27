import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://allo-frontend.vercel.app/login');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('kolo baddest');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kolop@hotmail.com');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('k@l@p6');
  await page.getByPlaceholder('Password', { exact: true }).press('CapsLock');
  await page.getByPlaceholder('Password', { exact: true }).fill('k@l@p6A&&');
  await page.getByPlaceholder('Confirm Password').click();
  await page.getByPlaceholder('Confirm Password').fill('');
  await page.getByPlaceholder('Confirm Password').press('CapsLock');
  await page.getByPlaceholder('Confirm Password').fill('k@l@p6');
  await page.getByPlaceholder('Confirm Password').press('CapsLock');
  await page.getByPlaceholder('Confirm Password').fill('k@l@p6A');
  await page.getByPlaceholder('Confirm Password').press('CapsLock');
  await page.getByPlaceholder('Confirm Password').fill('k@l@p6A&&');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.goto('https://allo-frontend.vercel.app/login');
});