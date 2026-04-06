import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {


  isauth  = signal(false)



 isAuthed(){
    this.isauth.set(true)
 }

 isLogedOut(){
  this.isauth.set(false)
 }






}
