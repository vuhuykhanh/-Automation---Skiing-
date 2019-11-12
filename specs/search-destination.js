const HomePage = require('../page-object/homepage');
describe('Searching destination', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });
  it('verify that can search the destination', () => {
    //    HomePage.verifyDestinationName('Canada');
    HomePage
      .verifyDestinationNameList(['Canada', 'Austria', 'Italy', 'France'])
      .verifyResortNameList()
      .clickOnSearchButton()
      .verifyAfterClickSearchButton();

  });
});