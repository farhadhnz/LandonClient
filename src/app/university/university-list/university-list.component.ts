import { UniversityDataSource } from './../university-data-source';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/city/city.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'details'];
  
  cityId;
  dataSource : UniversityDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: CityService){
    
  }

  ngOnInit(): void {

    this.cityId = this.route.snapshot.params['id'];

      this.dataSource = new UniversityDataSource(this.service);
      this.dataSource.loadUniversities(this.cityId);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadUniversitiesPage());
        
        
}

loadUniversitiesPage() {
    this.dataSource.loadUniversities(this.cityId);
}

}
