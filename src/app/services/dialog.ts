import { ChangeDetectorRef, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Dialog {




  state = signal(false)
  sms = signal("")



  show(str : any){
  this.state.set(true)
  this.sms.set(str)
 }

  hide(){
    this.state.set(false)
    this.sms.set("")
  }


   
}
