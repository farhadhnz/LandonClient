import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.css']
})
export class UniversityFormComponent implements OnInit {

  cityId;
  constructor(private route: ActivatedRoute, 
    private service: UniversityService,
    private router: Router) {
      
     

  }

  ngOnInit(): void {
    
    this.cityId = this.model.cityId = this.route.snapshot.params['id'];
  }

  @ViewChild('universityForm') public universityForm: NgForm;
  
  model = new University('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.service.postUniversity(this.model); 
    this.router.navigate(['/city/universities/' ,{id: this.cityId}])
  }

}
