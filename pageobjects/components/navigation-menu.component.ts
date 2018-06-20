import {ElementFinder} from 'protractor';
import { Fragment } from '../../utils/base-fragment.wrapper';
import {Locators} from "../../utils/entites-locators";


export class NavigationMenu extends Fragment {
    public readonly home: Fragment;
    private readonly aboutUs: Fragment;
    private readonly services: Fragment;
    private readonly clients: Fragment;

    constructor(navigationMenu: ElementFinder) {
        super(navigationMenu);
        this.home = new Fragment(this.$('#onetone-home'));
        this.aboutUs = new Fragment(this.$('#onetone-about'));
        this.services = new Fragment(this.$('#onetone-services'));
        this.clients = new Fragment(this.$('#onetone-gallery'));
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
