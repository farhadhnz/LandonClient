import { Province } from './province';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
 

  url = "http://applyapi.farhadh.ir/province/";

  constructor(private http: HttpClient) {

   }

   getCitiesOfProvince(provinceId) {
    return this.http.get(this.url + "getcities?provinceId=" + provinceId);
  }

    getProvince(id: any): Observable<object> {
      return this.http.get(this.url + "getprovince?id=" + id);
    }


   postProvince(province: Province) : void {
    var aa = this.http.post(this.url,province);
    aa.subscribe(x => console.log(x));
    
   }
}
