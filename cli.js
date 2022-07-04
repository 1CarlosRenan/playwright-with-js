const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Press Tab
  await page.locator('[data-test="username"]').press('Tab');

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Press Enter
  await page.locator('[data-test="password"]').press('Enter');
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Click a:has-text("1")
  await page.locator('a:has-text("1")').click();
  await page.waitForURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="checkout"]
  await page.locator('[data-test="checkout"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.locator('[data-test="firstName"]').click();

  // Fill [data-test="firstName"]
  await page.locator('[data-test="firstName"]').fill('Carlos');

  // Press Tab
  await page.locator('[data-test="firstName"]').press('Tab');

  // Fill [data-test="lastName"]
  await page.locator('[data-test="lastName"]').fill('Renan');

  // Press Tab
  await page.locator('[data-test="lastName"]').press('Tab');

  // Fill [data-test="postalCode"]
  await page.locator('[data-test="postalCode"]').fill('12345');

  // Click [data-test="continue"]
  await page.locator('[data-test="continue"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click [data-test="finish"]
  await page.locator('[data-test="finish"]').click();
  await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');

  // ---------------------
  await context.close();
  await browser.close();
})();