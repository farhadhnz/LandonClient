import { ProgramServiceService } from './../program-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SemesterDataSource } from '../semester-data-source';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css']
})
export class SemesterListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'deadline', 'season'];
  
  programId;
  dataSource : SemesterDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: ProgramServiceService){
    
  }

  ngOnInit(): void {

    this.programId = this.route.snapshot.params['id'];

      this.dataSource = new SemesterDataSource(this.service);
      this.dataSource.loadsemesters(this.programId);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadSemestersPage());
        
        
}

loadSemestersPage() {
    this.dataSource.loadsemesters(this.programId);
}

}
