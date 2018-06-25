import { ElementFinder } from 'protractor';
import { Fragment } from '../../utils/base-fragment.wrapper';

export class NavigationMenu extends Fragment {
    public readonly home: Fragment;
    private readonly aboutUs: Fragment;
    private readonly services: Fragment;
    private readonly clients: Fragment;

    constructor(navigationMenu: ElementFinder) {
        super(navigationMenu);
        this.home = new Fragment(this.$('#menu-item-170'));
        this.aboutUs = new Fragment(this.$('#menu-item-172'));
        this.services = new Fragment(this.$('#menu-item-169'));
        this.clients = new Fragment(this.$('#menu-item-167 '));
    }

    public async openHome(): Promise<void> {
        await this.home.clickOn();
    }

    public async openAboutUs(): Promise<void> {
        await this.aboutUs.clickOn();
    }

    public async openServices(): Promise<void> {
        await this.services.clickOn();
    }

    public async openClients(): Promise<void> {
        await this.clients.clickOn();
    }
}
