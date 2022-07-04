const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch({headless:false, slowMo: 300});
  const context = await browser.newContext({
    recordVideo: {
      dir:"./recordings"
    }
  });
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  // click on button
  await page.click('button');
  await page.waitForSelector('#loading');
  await page.waitForSelector('#loading', {state: 'hidden'});
  await page.waitForTimeout(100);

  await browser.close();
})();