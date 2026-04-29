import { Component, effect } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { RouterModule } from "@angular/router";
import { Auth } from '../services/auth';
import { Active } from '../directives/active';
import { Number } from '../directives/number';


@Component({
  selector: 'app-header',
  imports: [ RouterModule, Active, Number],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private auth : Auth){
     effect(()=>{
          this.login = this.auth.isauth() ? "Log Out" : "Log In"
     })
  }
    username = "Jonh"


    login :any = "Log In"
    

}


