import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { WebService } from './web.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService{
	
	constructor(private webService : WebService){ }

	getUserDetails() :Observable<any>{

		let networkConfig = {
			'url': 'users'
		};

		return this.webService.getDetails(networkConfig);

	}

	resetUserDetails() :Observable<any>{

		let networkConfig = {
			'url': 'users/reset'
		};

		return this.webService.getDetails(networkConfig);

	}

	addUserDetails(user : User) :Observable<any>{

		let networkConfig = {
			'url': 'users',
			'data' : user
		};

		return this.webService.postDetails(networkConfig);

	}

	deleteUserDetails(user) :Observable<any>{
		let networkConfig = {
			'url': 'users/',
			'data' : {
				'id' : user.id
			}
		};

		return this.webService.deleteDetails(networkConfig);
	}
	
}