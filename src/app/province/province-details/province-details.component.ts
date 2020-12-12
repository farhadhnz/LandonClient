import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinceService } from '../province.service';

@Component({
  selector: 'app-province-details',
  templateUrl: './province-details.component.html',
  styleUrls: ['./province-details.component.css']
})
export class ProvinceDetailsComponent implements OnInit {

  id;
  provinceModel : any;
  constructor(private route: ActivatedRoute, private service: ProvinceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     

    this.service.getProvince(this.id)
    .subscribe(data => {
      this.provinceModel = data;
    });
       
      
  }

}
