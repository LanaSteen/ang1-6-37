import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-selector',
  imports: [],
  templateUrl: './child-selector.html',
  styleUrl: './child-selector.scss',
})
export class ChildSelector {


  @ViewChild('mytext')  paragraph1!: ElementRef;  /// dom


  @ViewChild("myBtn")  btn1! : ElementRef 




  print(){
      console.log(this.paragraph1.nativeElement.innerText);
      this.btn1.nativeElement.style.backgroundColor = "red"
  }

}
