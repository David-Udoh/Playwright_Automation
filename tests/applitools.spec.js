import {test, expect} from '@playwright/test'

test('demo 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    await page.locator('id=username').fill('starboy homes')
    await page.locator('id=password').fill('@$t!7oo')
    await page.locator('id=log-in').click()
    
})

test.only('demo 2', async ({page}) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'Test 19 Collings' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

})

