import { BaseFragment } from 'protractor-element-extend'
import { WaitConditions } from './wait-conditions';

export class Fragment extends BaseFragment {

    public async clickOn(): Promise<void> {
        await this.waitForClickable();
        await this.click();
    }

    public async waitForClickable(): Promise<void> {
        await WaitConditions.clickable(this);
    }

    public async waitForVisible(): Promise<void> {
        await WaitConditions.visible(this);
    }

}
