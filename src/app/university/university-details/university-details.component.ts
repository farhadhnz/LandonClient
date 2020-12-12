import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  id;
  universityModel : any;
  constructor(private route: ActivatedRoute, private service: UniversityService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     

    this.service.getUniversity(this.id)
    .subscribe(data => {
      this.universityModel = data;
    });
       
      
  }

}
