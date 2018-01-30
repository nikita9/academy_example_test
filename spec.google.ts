import {$, browser, by, element, ExpectedConditions} from "protractor";

describe('given google searchpage', () => {
    it('then should open the result page',  async () => {

        const list = $('#ires');
        const isVisibleElement = browser.wait(ExpectedConditions.visibilityOf(list));

        await browser.get('https://google.com');



        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Timeout");
            }, 10000);
        });

        await element(by.css('#lst-ib')).sendKeys('selenium');
        await element(by.css('[type="submit"]')).click();
        
        await browser.wait(isVisibleElement);

        let todoList = element.all(by.css('#ires'));
        //expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('Selenium — Википедия');
    });
});