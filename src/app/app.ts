import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})



export class App {
  
  // any

  z :any;

  userAuth = true
  title = 'ang1-6';
  x = 500;

  greeting = "gamarjoba"
  mainbtn = "mainBtn"

  photo = "https://images.unsplash.com/photo-1761839258289-72f12b0de058?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  showHide = "show"

  user = {
     name : "John",
     age : 60
  }

  changebtn(){
    // if(this.mainbtn == "mainBtn"){
    //   this.mainbtn = "secondaryBtn"
    // }else{
    //   this.mainbtn = "mainBtn"
    // }

   this.mainbtn == "mainBtn" ? this.mainbtn = "secondaryBtn" : this.mainbtn = "mainBtn"
   this.showHide == "show" ? this.showHide = "hide" : this.showHide = "show"
    
      
  }

  

}



