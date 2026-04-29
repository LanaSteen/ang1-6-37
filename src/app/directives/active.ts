import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]',
})
export class Active {
  constructor(private el: ElementRef) {}


  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = "red"
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

 @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "white"
  }



@HostListener("keypress", ["$event"])
onKeyPress(event : any){
  if(event.key === "Enter"){
     this.el.nativeElement.style.backgroundColor = "green"
  }

}


}
