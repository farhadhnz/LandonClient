import { Program } from './../program';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramServiceService } from '../program-service.service';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.css']
})
export class ProgramFormComponent implements OnInit {

  universityId;
  constructor(private route: ActivatedRoute, 
    private service: ProgramServiceService,
    private router: Router) {
      
     

  }

  ngOnInit(): void {
    
    this.universityId = this.model.universityId = this.route.snapshot.params['id'];
  }

  @ViewChild('programForm') public programForm: NgForm;
  
  model = new Program('');

  submitted = false;

  onSubmit() 
  { 
    this.submitted = true;
    console.log(this.model);
    this.service.postProgram(this.model); 
    this.router.navigate(['/university/programs/' ,{id: this.universityId}])
  }

}
