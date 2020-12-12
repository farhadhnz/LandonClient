import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { UniversityService } from '../university/university.service';
import { Program } from './program';
export class ProgramDataSource implements DataSource<Program> {

    private loadingSubject = new BehaviorSubject<boolean>(false);
    private programsSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: UniversityService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<Program[]>{
      return this.programsSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.programsSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadprograms(universityId, filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getProgramsOfUniversity(universityId)
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.programsSubject.next(x)
      
              
      });
    }
}
