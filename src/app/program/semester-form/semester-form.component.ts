import { SemesterServiceService } from './../semester-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Semester } from '../semester';

@Component({
  selector: 'app-semester-form',
  templateUrl: './semester-form.component.html',
  styleUrls: ['./semester-form.component.css']
})
export class SemesterFormComponent implements OnInit {

  programId;
  constructor(private route: ActivatedRoute, 
    private service: SemesterServiceService,
    private router: Router) {
      
     

  }

  ngOnInit(): void {
    
    this.programId = this.model.programId = this.route.snapshot.params['id'];
  }

  @ViewChild('semesterForm') public semesterForm: NgForm;
  
  model = new Semester('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.service.postSemester(this.model); 
    this.router.navigate(['/university/programs/' ,{id: this.programId}])
  }


}
