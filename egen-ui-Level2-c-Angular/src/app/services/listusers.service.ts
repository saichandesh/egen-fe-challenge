import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class ListUsersService{
	
	constructor(private apiService : ApiService){ }

	getUserDetails(): Observable<any>{

		return this.apiService.getUserDetails();

	}

	resetUserDetails(): Observable<any>{

		return this.apiService.resetUserDetails();

	}
}