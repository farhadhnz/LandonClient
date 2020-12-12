import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryService } from '../country/country.service';
import { Province } from './province';


export class ProvinceDataSource implements DataSource<Province> {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private provincesSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: CountryService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<Province[]>{
      return this.provincesSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.provincesSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadProvinces(countryId, filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getProvincesOfCountry(countryId)
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.provincesSubject.next(x)
      
              
      });
    }
}
