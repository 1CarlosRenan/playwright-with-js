const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch({headless:false, slowMo: 1000});
  const page = await browser.newPage();
  await page.goto('https://paint.js.org/');

  await page.mouse.move(200,200);
  await page.mouse.down();
  await page.mouse.move(400,200);
  await page.mouse.move(400,400);
  await page.mouse.move(200,400);
  await page.mouse.move(200,200);
  await page.mouse.up();

  await browser.close();
})();