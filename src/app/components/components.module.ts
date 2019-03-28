import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ApiRequesterComponent} from './api-requester/api-requester.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ApiRequesterComponent,
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        ApiRequesterComponent,
    ]
})
export class ComponentsModule {
}
