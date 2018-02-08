import {$} from "protractor";

export const Locators = {
    Homepage: {
        NavigationMenu: {
            home: $('#menu-item-170'),
            aboutUs: $('#menu-item-172'),
            services: $('#menu-item-169'),
            clients: $('#menu-item-167 ')
        },
        Footer: {
            copyright: $('[class="site-info-inner"]')
        }
    },
};