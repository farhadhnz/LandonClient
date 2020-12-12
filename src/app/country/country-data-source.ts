import { CountryService } from './country.service';
import { DataSource } from '@angular/cdk/collections/data-source';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from './country';
import { CollectionViewer } from '@angular/cdk/collections';

export class CountryDataSource implements DataSource<Country> {

    private loadingSubject = new BehaviorSubject<boolean>(false);
    private countriesSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: CountryService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<Country[]>{
      return this.countriesSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.countriesSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadCountries(filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getAllCountries()
      .finally(() => this.loadingSubject.next(false))
      .then(x => 
        {
                this.countriesSubject.next(x)
      
              }
        );
    }
  }
  