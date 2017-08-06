import { browser, element, by } from 'protractor';
import { MyAppPage } from './app.po';

describe('Nootropic Cat Treats App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should display a quote', () => {
    const blockquote = by.css('blockquote');
    const quoteExists = element(blockquote).isPresent();
    expect(quoteExists).toBeTruthy();
  });
});

it('should display a different quote when the new quote button is clicked', () => {
  const blockquote1 = by.css('blockquote');
  const quote1 = element(blockquote1).getText();
  const button = element(by.css('button'));
  button.click();
  const blockquote2 = by.css('blockquote');
  const quote2 = element(blockquote1).getText();
  expect(quote2).not.toEqual(quote1);
});

/*
"click()" is available as a built-in jasmine convenience method
*/
