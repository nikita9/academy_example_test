import { browser, ElementFinder, ExpectedConditions as EC } from 'protractor';
import { Constants } from './constants';

export class WaitConditions {
    public static async clickable(element: ElementFinder): Promise<void> {
        await browser.wait(EC.elementToBeClickable(element),
            Constants.waitPreset.waitCondition.defaultTimeout,
            `${element.locator()} was expected to be clickable`);
    }

    public static async visible(element: ElementFinder): Promise<void> {
        await browser.wait(
            EC.visibilityOf(element),
            Constants.waitPreset.waitCondition.defaultTimeout,
            `${element.locator()} was expected to be visible`);
    }
}
