const countryData = require('../test-data/country.json');
// Xpath
const DESTINATION_TXT = '//input[@name=\'destination\']';
const COUNTRY_DESTINATION = '//div[@data-target=\'countries-resorts\']//div[@class=\'search-level-1\']//ul//li';
const RESORT_COUNTRY = '//div[@data-target=\'countries-resorts\']//div[@class=\'search-level-2\']//ul[@class=\'options-level-2 selected\']//li';
const SEARCH_BUTTON = '//button[@id=\'search-button\']';
const SEARCH_RESULT = '//div[@id=\'deal-search-results\']//div[@class=\'main_title\']';


class HomePage {
  clickOnDestinationTextbox() {
    $(DESTINATION_TXT).click();
    return this;
  }

  clickOnSearchButton() {
    $(SEARCH_BUTTON).click();
    return this;
  }

  verifyDestinationNameList(countryList) {
    this.clickOnDestinationTextbox();
    browser.pause(2000);
    countryList.forEach((country) => {
      const destinationName = $(COUNTRY_DESTINATION + '//a[contains(text(),\'' + country + '\')]').getText();
      expect(destinationName).to.equal(country);
    });
    return this;
  }

  verifyResortNameList() {
    const countryNameList = Object.keys(countryData);
    for (let i = 0; i < countryNameList.length; i++) {
      const countryName = countryNameList[i];
      const resortList = countryData[countryName];
      $(COUNTRY_DESTINATION + '//a[contains(text(),\'' + countryNameList[i] + '\')]').click();
      let existResort = false;
      resortList.forEach((resort) => {
        const resortName = $(RESORT_COUNTRY + '//a[contains(text(),"' + resort + '")]').getText();
        if (resort === resortName) {
          console.log('---------------------------------');
          console.log(resort);
          console.log(resortName);
          existResort = true;
        }
      });
      expect(existResort).to.equal(true);
    }
    return this;
  }

  verifyAfterClickSearchButton() {
    $(SEARCH_RESULT).waitForDisplayed(5000);
    const searchResult = $(SEARCH_RESULT).getText();
    expect(searchResult).to.equal('SKI HOLIDAYS RESULTS');
  }
}

module.exports = new HomePage();