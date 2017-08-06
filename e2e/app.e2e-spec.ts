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

/*
"click()" is available as a built-in jasmine convenience method
*/
