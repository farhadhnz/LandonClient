import { CityService } from './../city.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  id;
  cityModel : any;
  constructor(private route: ActivatedRoute, private service: CityService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     

    this.service.getCity(this.id)
    .subscribe(data => {
      this.cityModel = data;
    });
       
      
  }

}
