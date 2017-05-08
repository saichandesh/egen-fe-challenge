import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import {ListUsersComponent} from "./components/listusers/listusers.component";
import {AddUserComponent} from "./components/adduser/adduser.component";
import {UserProfileComponent} from "./components/userprofile/userprofile.component";

import { ApiService }  from './services/api.service';
import { WebService }  from './services/web.service';
import {ListUsersService} from './services/listusers.service';
import {AddUserService} from './services/adduser.service';
import {DeleteUserService} from './services/deleteuser.service';
import {UserInfoService} from './services/userinfo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ListUsersComponent,
        AddUserComponent,
        UserProfileComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' },
                ApiService,
                WebService,
                ListUsersService,
                AddUserService,
                DeleteUserService,
                UserInfoService,
                CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}