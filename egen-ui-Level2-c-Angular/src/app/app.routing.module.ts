import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { NgModule } from '@angular/core';

import {ListUsersComponent} from "./components/listusers/listusers.component";
import {AddUserComponent} from "./components/adduser/adduser.component";
import {UserProfileComponent} from "./components/userprofile/userprofile.component";

const routes: Routes = [
    {path: '', redirectTo: 'listusers', pathMatch: 'full'},
  	{ path: 'listusers',  component: ListUsersComponent },
  	{ path: 'adduser',  component: AddUserComponent },
  	{ path: 'userprofile',  component: UserProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
