import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {AddUserService} from "../../services/adduser.service";
import {Location} from '@angular/common';
import { User } from '../../shared/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector : 'add-user',
    templateUrl: './app/components/adduser/adduser.component.html',
    providers : [AddUserService],
    styleUrls: ['./app/components/adduser/adduser.component.css']
})
export class AddUserComponent implements OnInit {
	//variable declarations
	user = new User('','','',{},{},'');
    inputerror : boolean;
    adding : boolean;
    dummyprofilepic = 'http://lorempixel.com/640/480/business';

	constructor(public addUserService :AddUserService,private location: Location,private router:Router){ }

	addUserDetails(addUserForm : NgForm){
		if(addUserForm.valid){
            this.inputerror = false;
            this.user.profilePic = this.dummyprofilepic;
            this.adding = true;
            this.addUserService.addUserDetails(this.user)
                          .subscribe(
                            response => {
                                this.adding = false;
                                this.router.navigate(['/listusers']);
                            },err =>{
                                console.log(err);
                                this.adding = false;
                            });
        }else{
            this.inputerror = true;
        }
	}
    navgiateBack(){
        this.location.back();
    }

    ngOnInit() {
        this.inputerror = false;
        this.adding = false;
    }
}