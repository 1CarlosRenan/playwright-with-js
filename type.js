const {chromium } = require('playwright');

( async() => {
  // function code
  const browser = await chromium.launch({headless:false, slowMo: 100});
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/forgot_password');
  // code to type in email textbox
  const email = await page.$('#email');
  await email.type('carlosrenan96@gmail.com', {delay: 50})
  await browser.close();
})();