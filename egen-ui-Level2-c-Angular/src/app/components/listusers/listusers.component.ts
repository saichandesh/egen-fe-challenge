import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {ListUsersService} from "../../services/listusers.service";
import {UserInfoService} from '../../services/userinfo.service';

@Component({
	selector : 'list-user',
    templateUrl: './app/components/listusers/listusers.component.html',
    providers : [ListUsersService],
    styleUrls: ['./app/components/listusers/listusers.component.css']
})
export class ListUsersComponent implements OnInit {
	//variables declarations
	users = [];
	loadingdetails : boolean;

	constructor(public listUsersService :ListUsersService,private router:Router,public userInfoService:UserInfoService){ }

	displayUserProfile(user){
		this.userInfoService.setUserProfile(user);
		this.router.navigate(['/userprofile']);
	}

	navgiateAddUser(){
		this.router.navigate(['/adduser']);
	}

	resetUserDetails(){
		this.loadingdetails = true;
		this.listUsersService.resetUserDetails()
    					.subscribe(
							response => {
								this.loadingdetails = false;
								this.users = response;
							},err =>{
								console.log(err);
							});
	}

    ngOnInit() {
    	this.loadingdetails = true;
    	this.listUsersService.getUserDetails()
    					.subscribe(
							response => {
								if(response.length===0){
									this.resetUserDetails();
								}else{
									this.loadingdetails = false;
									this.users = response;
								}							
							},err =>{
								console.log(err);
							});
    }
}