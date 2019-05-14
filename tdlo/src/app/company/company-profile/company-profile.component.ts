import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyProfileComponent implements OnInit {

  @Input() childMessage: string;

  constructor(private cd: ChangeDetectorRef) {}
  
  ngOnInit() {

    console.log("In side CompanyProfileComponent",this.childMessage);
    

  }

}
