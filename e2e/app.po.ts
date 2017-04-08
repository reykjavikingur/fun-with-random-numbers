import { browser, element, by } from 'protractor';

export class FunWithRandomNumbersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('p01-root h1')).getText();
  }
}
