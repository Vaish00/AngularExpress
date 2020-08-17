import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlConstant } from './constants/apiurl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { ApiUrlConstant } from 'C:\Users\vaish\PROJECTS\ASSIGNMENT\client\src\app\constants\apiurl';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private http: HttpClient
    ) { }


    bulkUpload(data):Observable<{}> {
      return this.http.post(ApiUrlConstant.BULK_UPLOAD, data).pipe(map((response => { return response })))
    }  
    
    listSpare():Observable<{}> {
      return this.http.get(ApiUrlConstant.LIST_SPARE).pipe(map((response => { return response })))
    }
}
