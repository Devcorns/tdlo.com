import { Directive, ElementRef, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  
  @Input() appColor;

  constructor(private el:ElementRef) {
    
    //el.nativeElement.style.backgroundColor = '#f00';
    //console.log(this.appColor);
    
  }

  
ngOnInit(){
  this.el.nativeElement.style.backgroundColor = this.appColor;
  console.log(this.appColor);
}


}
