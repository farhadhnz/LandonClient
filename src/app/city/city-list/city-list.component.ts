import { ProvinceService } from './../../province/province.service';
import { CityDataSource } from './../city-data-source';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'details'];
  
  provinceId;
  dataSource : CityDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: ProvinceService){
    
  }

  ngOnInit(): void {

    this.provinceId = this.route.snapshot.params['id'];

      this.dataSource = new CityDataSource(this.service);
      this.dataSource.loadCities(this.provinceId);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadCitiesPage());
        
        
}

loadCitiesPage() {
    this.dataSource.loadCities(this.provinceId);
}
}
