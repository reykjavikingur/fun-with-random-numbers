import { FunWithRandomNumbersPage } from './app.po';

describe('fun-with-random-numbers App', function() {
  let page: FunWithRandomNumbersPage;

  beforeEach(() => {
    page = new FunWithRandomNumbersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('p01 works!');
  });
});
