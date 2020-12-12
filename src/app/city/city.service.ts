import { City } from './city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url = "http://applyapi.farhadh.ir/city/";

  constructor(private http: HttpClient) {

   }

   getUniversitiesOfCity(cityId) {
    return this.http.get(this.url + "getuniversities?cityId=" + cityId);
}

    getCity(id: any): Observable<object> {
      return this.http.get(this.url + "getcity?id=" + id);
    }


   postCity(city: City) : void {
    var aa = this.http.post(this.url,city);
    aa.subscribe(x => console.log(x));
    
   }
}
