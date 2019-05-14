import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.sass']
})
export class CompanyMainComponent implements OnInit {

  companyDetails = {};
  
  parentMessage = "i am indian";
  
  constructor(private route: ActivatedRoute,private gs: GlobalService) {
    
  }

  ngOnInit() {

    this.route.url.subscribe(url => {
      console.log(url,"In subscribe");
      let id: string = this.route.snapshot.params.id;

      this.gs.get("api/user/get-company-details",id).subscribe(function(res:any) {
        console.log("Get compnay details",res);
        this.companyDetails = res;
        this.parentMessage = "I am from india";
        
      });
    });

  }

  ngOnChanges() {
    this.parentMessage = "I am from india";
  }


}
