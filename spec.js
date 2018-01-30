"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('angularjs homepage todo list', () => {
    it('should add a todo', () => {
        protractor_1.browser.get('https://angularjs.org');
        protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test');
        protractor_1.element(protractor_1.by.css('[value="add"]')).click();
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');
        // You wrote your first test, cross it off the list
        todoList.get(2).element(protractor_1.by.css('input')).click();
        let completedAmount = protractor_1.element.all(protractor_1.by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});
//# sourceMappingURL=spec.js.map