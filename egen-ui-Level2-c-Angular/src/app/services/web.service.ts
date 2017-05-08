import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class WebService {

    constructor (private http: Http) {}

    private baseUrl = 'http://mocker.egen.io/'; 

    getDetails(networkConfig): Observable<any> {
    
        let actualUrl = `${this.baseUrl}${networkConfig.url}`;

        return this.http.get(actualUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   
 
    deleteDetails(networkConfig): Observable<any> {

        let actualUrl = `${this.baseUrl}${networkConfig.url}${networkConfig.data.id}`;

        return this.http.delete(actualUrl)
                         .map((res:Response) => res) 
                         .catch((error:any) => Observable.throw(error || 'Server error')); 
    } 

    postDetails(networkConfig): Observable<any> {

        let bodyString = JSON.stringify(networkConfig.data);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers });
        let actualUrl = `${this.baseUrl}${networkConfig.url}`;

        return this.http.post(actualUrl, bodyString, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }  

}