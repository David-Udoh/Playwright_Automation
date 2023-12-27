const {test, expect} = require('@playwright/test')

test('Open browser', async ({page}) => {

  await page.goto('https://Pay4Power.com/')
  await expect(page).toHaveTitle('Pay4Power')
})  
