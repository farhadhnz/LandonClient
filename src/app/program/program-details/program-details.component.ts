import { ProgramServiceService } from './../program-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {

  id;
  programModel : any;
  constructor(private route: ActivatedRoute, private service: ProgramServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     

    this.service.getProgram(this.id)
    .subscribe(data => {
      this.programModel = data;
    });

}

}
