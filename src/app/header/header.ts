import { Component, effect } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { RouterModule } from "@angular/router";
import { Auth } from '../services/auth';

@Component({
  selector: 'app-header',
  imports: [ RouterModule],
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


