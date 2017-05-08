import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { User } from '../shared/user';
import { ApiService } from './api.service';

@Injectable()
export class AddUserService{
	
	constructor(private apiService : ApiService){ }

	addUserDetails(user : User): Observable<any>{

		return this.apiService.addUserDetails(user);

	}

}