import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyProfileComponent implements OnInit {

  companyDetails = [];

  constructor(private route: ActivatedRoute,private gs:GlobalService) {
  }

ngOnInit() {

    this.route.url.subscribe(url => {
      
      let id: string = this.route.snapshot.params.id;

     console.log(id);
     this.gs.get("api/user/get-company-details",id).subscribe(function(res:any) {

      console.log("Get compnay details",res);
      
      //this.companyDetails.push(res);
      console.log(this.companyDetails);
      
      
      
    });

        
      
    });

  }

}
