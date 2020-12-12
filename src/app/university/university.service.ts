import { University } from './university';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url = "http://applyapi.farhadh.ir/university/";

  constructor(private http: HttpClient) {

   }

   getProgramsOfUniversity(universityId) {
    return this.http.get(this.url + "getprograms?universityId=" + universityId);
}

    getUniversity(id: any): Observable<object> {
      return this.http.get(this.url + "getuniversity?id=" + id);
    }


   postUniversity(university: University) : void {
    var aa = this.http.post(this.url, university);
    aa.subscribe(x => console.log(x));
    
   }
}
