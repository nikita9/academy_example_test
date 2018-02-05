import {browser, by, element} from "protractor";

describe('Given the Homepage', () => {
   const homeMenuItem = element(by.css('#menu-item-170'));
   const aboutUsMenuItem = element(by.css('#menu-item-172'));
   const servicesMenuItem = element(by.css('#menu-item-169'));
   const clientsMenuItem = element(by.css('#menu-item-167'));

   beforeAll(async () => {
       await browser.get('http://boxwoodstudio.org');
   });

   describe('when clicks on "About Us"', ()  => {
       beforeAll(async () => {
           await aboutUsMenuItem.click();
       });

       it('then the following page should exist', async () => {
        const title = await element(by.css('.page-title'));

        console.log(await title.getText());
        return expect(title.getText()).toContain('About Us');
       })
   });

    describe('when clicks on "Service"', ()  => {
        beforeAll(async () => {
            await servicesMenuItem.click();
        });

        it('then the following page should exist', async () => {
            const title = await element(by.css('.page-title'));

            return expect(title.getText()).toContain('Services');
        })
    });

    describe('when clicks on "Clients"', ()  => {
        beforeAll(async () => {
            await clientsMenuItem.click();
        });

        it('then the following page should exist', async () => {
            const title = await element(by.css('.page-title'));

            return expect(title.getText()).toContain('Clients');
        })
    });

    describe('when clicks on "Home"', ()  => {
        beforeAll(async () => {
            await homeMenuItem.click();
        });

        it('then the following page should exist', async () => {
            const title = await element(by.css('h2.widget-title'));

            return expect(title.getText()).toContain('Need to develop, test or design something?');
        })
    });


//    beforeAll(async () => {
//
//     // await element(by.css('#menu-item-170')).click();
//     // await element(by.css('#menu-item-172')).click();
//     await homeMenuItem.click();
//     await aboutUsMenuItem.click();
// });
//    it('then the following text should be on the page', async () => {
//       const title = await element(by.css('.page-title'));
//
//       return expect(title.getText()).toContain('About Us');
//    });
});