import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private api : HttpClient){

  }



  baseUrl = "https://restaurant.stepprojects.ge/api/"


  getAll(url : string){
      return this.api.get(this.baseUrl + url)
  }


}
