import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CountryService } from 'src/app/country/country.service';
import { ProvinceDataSource } from '../province-data-source';

@Component({
  selector: 'app-provincelist',
  templateUrl: './provincelist.component.html',
  styleUrls: ['./provincelist.component.css']
})
export class ProvincelistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'details'];
  
  countryId;
  dataSource : ProvinceDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private service: CountryService){
    
  }

  ngOnInit(): void {

    this.countryId = this.route.snapshot.params['id'];

      this.dataSource = new ProvinceDataSource(this.service);
      this.dataSource.loadProvinces(this.countryId);
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadProvincesPage());
        
        
}

loadProvincesPage() {
    this.dataSource.loadProvinces(this.countryId);
}

}
