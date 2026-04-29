import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]',
})
export class Number {
  constructor(private el : ElementRef) {}


@HostListener("keypress", ["$event"])
onKeyPress(event : any){

  if(!/[0-9]/.test(event.key)){
    event.preventDefault()
    this.el.nativeElement.style.backgroundColor = "red"
  }
  else{
     this.el.nativeElement.style.backgroundColor = "white"
  }


}

}
