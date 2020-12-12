import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
    

  url = "http://applyapi.farhadh.ir/country/";

  constructor(private http: HttpClient) {

   }

   getProvincesOfCountry(countryId) {
    return this.http.get(this.url + "getprovinces?countryId=" + countryId);
}

   getCountry(id) : Observable<object> {
    return this.http.get(this.url + "getcountry?id=" + id);
   }

    getAllCountries()  : Promise<object> {
    const promise = this.http.get(this.url + "getall").toPromise();
     
     return promise;
   }

   postCountry(country: Country) : void {
    var aa = this.http.post(this.url,country);
    aa.subscribe(x => console.log(x));
    
   }
      
}
