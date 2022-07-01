const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch({headless:false, slowMo: 300});
  const page = await browser.newPage();
  await page.goto('https://demoqa.com/frames');
  // logic to handle the iframes
  const frame1 = await page.frame({url:/\/sample/});
  const heading = await frame1.$('h1');
  console.log(await heading.innerText())
  await browser.close();
})();