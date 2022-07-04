const BasePage = require('./Base.page');
class HomePage extends BasePage {
  constructor(page){
    super(page);

    // locators
    this.loggedUser = '.logged-user-name';
    this.balances = '.balance-value';
  }

  async getUserName(){
    let user = await this.page.$(this.loggedUser);
    return await user.innerText();
  }

  async getBalance(balType){
    let balArray = await this.page.$$(this.balances);
    if(balType == 'total'){
      return (await balArray[0].$('span')).innerText();
    } else if(balType == 'credit') {
      return (await balArray[1]).innerText();
    } else {
      return (await balArray[2]).innerText();
    }
  }

  async navigate() {
    await super.navigate('app.html');
  }
}
module.exports = HomePage;