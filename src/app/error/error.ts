import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {
  constructor(private rouetr : Router){
     console.log()
  }


  ngOnInit(){

  }
  ngOnDestroy(){
    console.log("commponent ");
    
  }

  gotoHome(){
    // this.rouet.navigate(["home"])
    this.rouetr.navigateByUrl("home")
  }
}
