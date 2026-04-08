import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  // constructor(private cdr : ChangeDetectorRef){}

  
  
  @Input() btnText = ""

  @Output() sendInfoToParent = new EventEmitter<any>()

  ngOnChanges(){
      // this.cdr.detectChanges()
      console.log(this.btnText + "from ng on change");
  }

  ngOnInit(){   
     console.log(this.btnText + "from ng on init");
    
  }


  // isbtnClicked = true

 clickonButton(){
   this.sendInfoToParent.emit(true)
 }

}
