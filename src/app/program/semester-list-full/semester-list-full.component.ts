import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { ProgramServiceService } from '../program-service.service';
import { SemesterDataSource } from '../semester-data-source';

@Component({
  selector: 'app-semester-list-full',
  templateUrl: './semester-list-full.component.html',
  styleUrls: ['./semester-list-full.component.css']
})
export class SemesterListFullComponent implements OnInit {

  displayedColumns: string[] = ['program','country', 'province', 'city', 'university', 'deadline', 'season'];
  
  dataSource : SemesterDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: ProgramServiceService){
    
  }

  ngOnInit(): void {

      this.dataSource = new SemesterDataSource(this.service);
      this.dataSource.loadsemestersFull();
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadSemestersPage());
        
        
}

loadSemestersPage() {
    this.dataSource.loadsemestersFull();
}

}
