import { Semester } from './semester';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemesterServiceService {

  url = "http://applyapi.farhadh.ir/semester/";

  constructor(private http: HttpClient) {

   }

   
    // getProgram(id: any): Observable<object> {
    //   return this.http.get(this.url + "getprogram?id=" + id);
    // }


   postSemester(semester: Semester) : void {
    var aa = this.http.post(this.url, semester);
    aa.subscribe(x => console.log(x));
    
   }
}
