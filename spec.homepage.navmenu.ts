import {MainPage} from "./pageobjects/main.page";
import {browser} from "protractor";

const mainPage: MainPage = new MainPage();

describe('Check if pages exist by clicking on the items in Navigation Menu', () => {
    describe('Given Homepage', () => {
        beforeAll(async () => {
            await browser.get('http://boxwoodstudio.org');
        });

        describe('when clicks on "About Us"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationmenu.openAboutUs();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationmenu.waitForVisible();
                expect(await mainPage.title.getText()).toContain('Boxwood Studio');
            })
        });

        describe('when clicks on "Service"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationmenu.openServices();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationmenu.waitForVisible();
                expect(await mainPage.title.getText()).toContain('Boxwood Studio');
            })
        });

        describe('when clicks on "Clients"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationmenu.openClients();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationmenu.waitForVisible();
                await mainPage.navigationmenu.waitForClickable();
                expect(await mainPage.title.getText()).toContain('Boxwood Studio');
            })
        });

        describe('when clicks on "Home"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationmenu.openHome();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationmenu.waitForVisible();
                expect(await mainPage.titleHome.getText()).toContain('Boxwood Studio');
            });
        });
    });
});
