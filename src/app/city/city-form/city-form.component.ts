import { CityService } from './../city.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  provinceId;
  constructor(private route: ActivatedRoute, 
    private service: CityService,
    private router: Router) {
      
     

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

    this.provinceId = this.model.provinceId = this.route.snapshot.params['id'];
  }

  @ViewChild('cityForm') public cityForm: NgForm;
  
  model = new City('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.service.postCity(this.model); 
    this.router.navigate(['/province/cities/' ,{id: this.provinceId}])
  }

}
