import { CountryService } from './../country.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CountryDataSource } from '../country-data-source';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  displayedColumns: string[] = ['name', 'details'];
  
  countries;
  dataSource : CountryDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: CountryService){
    
  }

  ngOnInit(): void {

      this.dataSource = new CountryDataSource(this.service);
      this.dataSource.loadCountries();
  }

  ngAfterViewInit() {
    this.paginator.page
        .subscribe(
            () => this.loadCountriesPage());
        
        
}

loadCountriesPage() {
    this.dataSource.loadCountries();
}

}


