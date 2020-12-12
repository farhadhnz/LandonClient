import { CountryService } from './../country.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from '../country';

@Component({
  selector: 'app-countryform',
  templateUrl: './countryform.component.html',
  styleUrls: ['./countryform.component.css']
})
export class CountryformComponent {

  constructor(private countryService: CountryService) {
    

  }


  @ViewChild('countryForm') public countryForm: NgForm;
  
  model = new Country('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.countryService.postCountry(this.model); 
    this.countryForm.reset();
  }



}
