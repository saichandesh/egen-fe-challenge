import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { CookieService} from 'angular2-cookie/core';

@Injectable()
export class UserInfoService{

	constructor(public cookieService :CookieService){ }

	setUserProfile(userprofile){
		this.cookieService.put("userprofile",JSON.stringify(userprofile));
	}

	getUserProfile(){
		
		return JSON.parse(this.cookieService.get("userprofile"));
	}

}