import { ActivatedRoute, Router } from '@angular/router';
import { Province } from './../province';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-province-form',
  templateUrl: './province-form.component.html',
  styleUrls: ['./province-form.component.css']
})
export class ProvinceFormComponent implements OnInit {
  
  countryId;
  constructor(private route: ActivatedRoute, 
    private service: ProvinceService,
    private router: Router) {
      
     

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

    this.countryId = this.model.countryId = this.route.snapshot.params['id'];
  }

  @ViewChild('provinceForm') public provinceForm: NgForm;
  
  model = new Province('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.service.postProvince(this.model); 
    this.router.navigate(['/country/provinces/' ,{id: this.countryId}])
  }

}
