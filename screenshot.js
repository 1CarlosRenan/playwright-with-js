const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://applitools.com/');

  // take screenshot code
  await page.screenshot({path: 'screenshot.png'});
  const logo = await page.$('.logo');
  await logo.screenshot({path: 'logo.png'})

  await page.screenshot({path: 'fullPage.png', fullPage: true});

  await browser.close();
})();