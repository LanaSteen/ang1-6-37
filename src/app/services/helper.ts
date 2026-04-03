import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Helper {

  userName = "john"

  print(){
     console.log("printed from Servise");
     
  }
}
