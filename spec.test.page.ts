import {browser, by, element} from "protractor";

describe('Given the Homepage', () => {
   const homeMenuItem = element(by.css('#menu-item-170'));
   const aboutUsMenuItem = element(by.css('#menu-item-172'));
   beforeAll(async () => {
    await browser.get('http://boxwoodstudio.org');
    // await element(by.css('#menu-item-170')).click();
    // await element(by.css('#menu-item-172')).click();
    await homeMenuItem.click();
    await aboutUsMenuItem.click();
});
   it('then the following text should be on the page', async () => {
      const title = await element(by.css('.page-title'));

      return expect(title.getText()).toContain('About Us');
   });
});