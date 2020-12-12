import { ProgramServiceService } from './program-service.service';
import { Semester } from './semester';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class SemesterDataSource implements DataSource<Semester> {

    private loadingSubject = new BehaviorSubject<boolean>(false);
    private semestersSubject = new BehaviorSubject<any>('');
  
    public loading$ = this.loadingSubject.asObservable();
  
    constructor(private service: ProgramServiceService){
      
    }
  
    connect(collectionViewer : CollectionViewer): Observable<Semester[]>{
      return this.semestersSubject.asObservable();
    }
  
    disconnect(collectionViewer : CollectionViewer) : void {
      this.semestersSubject.complete();
      this.loadingSubject.complete();
    }
  
    loadsemesters(programId, filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getSemestersOfProgram(programId)
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.semestersSubject.next(x)
      
              
      });
    }


    loadsemestersFull( filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3){
      this.loadingSubject.next(true);
  
      this.service.getAllSemesters()
      .subscribe((x) => 
      {this.loadingSubject.next(false)
      
                this.semestersSubject.next(x)
      
              
      });
    }
}

