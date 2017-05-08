import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class DeleteUserService{
	
	constructor(private apiService : ApiService){ }

	deleteUserDetails(user): Observable<any>{
		return this.apiService.deleteUserDetails(user);
	}

}