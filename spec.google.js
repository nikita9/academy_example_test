"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('given google searchpage', () => {
    it('then should open the result page', () => __awaiter(this, void 0, void 0, function* () {
        const list = protractor_1.$('#ires');
        const isVisibleElement = protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(list));
        yield protractor_1.browser.get('https://google.com');
        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Timeout");
            }, 10000);
        });
        yield protractor_1.element(protractor_1.by.css('#lst-ib')).sendKeys('selenium');
        yield protractor_1.element(protractor_1.by.css('[type="submit"]')).click();
        yield protractor_1.browser.wait(isVisibleElement);
        let todoList = protractor_1.element.all(protractor_1.by.css('#ires'));
        //expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('Selenium — Википедия');
    }));
});
//# sourceMappingURL=spec.google.js.map