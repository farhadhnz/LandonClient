import { CountryService } from './../country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  id;
  countryModel : any;
  constructor(private route: ActivatedRoute, private service: CountryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     

    this.service.getCountry(this.id)
    .subscribe(data => {
      this.countryModel = data;
    });
       
      
  }

}
