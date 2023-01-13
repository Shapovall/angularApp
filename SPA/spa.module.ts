import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaSidebarComponent } from './spa-sidebar/spa-sidebar.component';

@NgModule({
    declarations: [
        SpaHeaderComponent,
        SpaContentComponent,
        SpaFooterComponent,
        SpaBodyComponent,
        SpaSidebarComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,

    ],
    providers: [],
    exports: [SpaBodyComponent]

})
export class SpaModule { }
