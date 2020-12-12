import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from './program';

@Injectable({
  providedIn: 'root'
})
export class ProgramServiceService {
  

  url = "http://applyapi.farhadh.ir/program/";

  constructor(private http: HttpClient) {

   }

   getSemestersOfProgram(programId) {
    return this.http.get(this.url + "getsemesters?programId=" + programId);
}

getAllSemesters() {
  return this.http.get("http://applyapi.farhadh.ir/semester/" + "getallsemesters");
}

    getProgram(id: any): Observable<object> {
      return this.http.get(this.url + "getprogram?id=" + id);
    }


   postProgram(program: Program) : void {
    var aa = this.http.post(this.url, program);
    aa.subscribe(x => console.log(x));
    
   }
}
