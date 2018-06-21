import { MainPage } from "./pageobjects/main.page";
import { browser } from "protractor";

const mainPage: MainPage = new MainPage();

describe('Check if pages exist by clicking on the items in Navigation Menu', () => {
    describe('Given Homepage', () => {
        beforeAll(async () => {
            await browser.get('http://boxwoodstudio.org');
        });

        describe('when clicks on "About Us"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationMenu.openAboutUs();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationMenu.waitForVisible();
                expect(await mainPage.title.getText()).toContain('About Us');
            })
        });

        describe('when clicks on "Service"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationMenu.openServices();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationMenu.waitForVisible();
                expect(await mainPage.title.getText()).toContain('Services');
            })
        });

        describe('when clicks on "Clients"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationMenu.openClients();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationMenu.waitForVisible();
                await mainPage.navigationMenu.waitForClickable();
                expect(await mainPage.title.getText()).toContain('Clients');
            })
        });

        describe('when clicks on "Home"', ()  => {
            beforeAll(async () => {
                await mainPage.navigationMenu.openHome();
            });

            it('then the following page should exist', async () => {
                await mainPage.navigationMenu.waitForVisible();
                expect(await mainPage.titleHome.getText()).toContain('Need to develop, test or design something?');
            });
        });
    });
});
