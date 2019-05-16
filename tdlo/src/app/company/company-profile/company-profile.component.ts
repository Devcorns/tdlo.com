import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef, NgZone  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';



@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyProfileComponent implements OnInit {


   companyDetails = { name:"github"};

  constructor(private route: ActivatedRoute,private gs:GlobalService,public cdr: ChangeDetectorRef) {
    
    this.route.url.subscribe(url => {
      const currentClassObj = this;
      let id: string = this.route.snapshot.params.id;

     console.log("company-profile.component get id of company value",id);
     this.gs.get("api/user/get-company-details",id).subscribe(function(res:any) {
      
      console.log("Get compnay details",res);
     
      currentClassObj.companyDetails = res;
      currentClassObj.cdr.detectChanges();
      
      console.log("call company details from company profile",self, this.companyDetails);
     // console.log(this.companyDetails)
     
      
    });

        
      
    });


  }

  ngOnInit() {
    
    
  }




}
