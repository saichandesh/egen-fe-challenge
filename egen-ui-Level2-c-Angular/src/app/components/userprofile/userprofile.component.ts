import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {DeleteUserService} from "../../services/deleteuser.service";
import {UserInfoService} from '../../services/userinfo.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector : 'user-profile',
    templateUrl: './app/components/userprofile/userprofile.component.html',
    providers : [DeleteUserService],
    styleUrls: ['./app/components/userprofile/userprofile.component.css'],
    inputs : ['user']
})
export class UserProfileComponent implements OnInit {
	
	user:any;
    deleting:boolean;
    error:boolean;

	constructor(public deleteUserService :DeleteUserService,public userInfoService:UserInfoService,private router:Router,private location: Location){ }

    deleteUserDetails(user){
        this.deleting = true; this.error=false;
        this.deleteUserService.deleteUserDetails(user)
                          .subscribe(
                            response => {
                                this.deleting = false;
                                this.router.navigate(['/listusers']);
                            },err =>{
                                console.log(err);
                                this.user = this.userInfoService.getUserProfile();
                                this.deleting = false;
                                this.error=true;
                            });
    }

    navgiateBack(){
        this.location.back();
    }

    ngOnInit() {
        this.deleting = false;
        this.error = false;
    	this.user=this.userInfoService.getUserProfile();
    }
}