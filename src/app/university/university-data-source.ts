import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CityService } from '../city/city.service';
import { University } from './university';


export class UniversityDataSource implements DataSource<University> {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private universitiesSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: CityService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<University[]>{
      return this.universitiesSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.universitiesSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadUniversities(cityId, filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getUniversitiesOfCity(cityId)
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.universitiesSubject.next(x)
      
              
      });
    }
}
