import { test, expect } from '@playwright/test'
import { describe } from 'node:test'

test.describe('All my test', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.click('id=user-name')
        await page.locator('id=user-name').fill('problem_user')
        await page.locator('[id="password"]').fill('secret_sauce')
        await page.locator('#login-button').click()

    })

    // test.afterAll(async({page}) => {
    //     await page.close()
    // })

    test('homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('a').filter({ hasText: '1' }).click();
        await page.locator('[data-test="checkout"]').click();
    });

    test('logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    });

})