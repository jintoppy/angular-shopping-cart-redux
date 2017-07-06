import { ShoppingCartPage } from './app.po';

describe('shopping-cart App', () => {
  let page: ShoppingCartPage;

  beforeEach(() => {
    page = new ShoppingCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
