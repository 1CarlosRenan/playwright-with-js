const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch({headless:false, slowMo: 300});
  const page = await browser.newPage();
  await page.goto('http://google.com');
  await browser.close();
})();