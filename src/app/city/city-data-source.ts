import { ProvinceService } from './../province/province.service';
import { City } from './city';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class CityDataSource implements DataSource<City> {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private citiesSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: ProvinceService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<City[]>{
      return this.citiesSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.citiesSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadCities(provinceId, filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getCitiesOfProvince(provinceId)
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.citiesSubject.next(x)
      
              
      });
    }
}
