const {chromium } = require('playwright');

( async() => {
  // function code

  // lauching browser
  const browser = await chromium.launch({headless:false, slowMo: 300});
  // creating a page inside browser
  const page = await browser.newPage();
  // navigating to side
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
  //check the second checkbox
  const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
  await checks[1].check();
  await checks[0].uncheck();
  //select the second radio button
  const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
  await radios[1].check();
  // closing browser
  await browser.close();
})(); // function calls itself