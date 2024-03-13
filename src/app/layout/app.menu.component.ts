import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Welcome',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Welcome',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    }
                ]
            },
            {
                label: '系統管理',
                icon: 'pi pi-users',
                items: [
                    {
                        label: '管理員帳號',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/admin']
                    }
                ]
            },
            {
                label: '團隊管理',
                icon: 'pi pi-users',
                items: [
                    {
                        label: '團隊帳號',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/member']
                    }
                ]
            },
        ];
    }
}
