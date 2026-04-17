import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {


  


  isauth  = localStorage.getItem("accessToken") ? signal(true) : signal(false)



 isAuthed(){
    this.isauth.set(true)
 }

//   isAuthed2(token : strin){
//     this.isauth.set(true)
//  }

 isLogedOut(){
  this.isauth.set(false)
 }






}
