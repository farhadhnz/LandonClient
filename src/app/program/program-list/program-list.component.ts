import { ProgramDataSource } from './../program-data-source';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from 'src/app/university/university.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'details'];
  
  universityId;
  dataSource : ProgramDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: UniversityService){
    
  }

  ngOnInit(): void {

    this.universityId = this.route.snapshot.params['id'];

      this.dataSource = new ProgramDataSource(this.service);
      this.dataSource.loadprograms(this.universityId);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadProgramsPage());
        
        
}

loadProgramsPage() {
    this.dataSource.loadprograms(this.universityId);
}

}
