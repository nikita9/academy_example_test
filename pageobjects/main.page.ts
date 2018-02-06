import {$} from "protractor";
import {NavigationMenu} from "./components/navigation-menu.component";
import {Fragment} from "../utils/base-fragment.wrapper";

export class MainPage {
    public readonly navigationmenu: NavigationMenu;
    public readonly copyright: Fragment;
    public readonly titleHome: Fragment;
    public readonly title: Fragment;

    constructor() {
        this.navigationmenu = new NavigationMenu($('[class="main-navigation-container"]'));
        this.copyright = new Fragment($('[class="site-info-inner"]'));
        this.title = new Fragment($('[class="page-title"]'));
        this.titleHome = new Fragment($('h2.widget-title'));
    }

    public async waitForComponentsVisible(): Promise<void> {
        await this.waitForMain();
        await this.navigationmenu.waitForVisible();
    }

    private async waitForMain(): Promise<void> {
        try {
            await this.navigationmenu.waitForVisible();
        }
        catch (error) {
            await this.copyright.waitForVisible();
        }
    }
}