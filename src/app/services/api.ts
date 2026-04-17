import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoingUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private api : HttpClient){

  }

  baseUrl2 = "https://restaurantapi.stepacademy.ge/api/"
  //  https://restaurantapi.stepacademy.ge/api


 getAll2(url : string){
      return this.api.get(this.baseUrl2 + url )
  }   
  baseUrl = "https://restaurant.stepprojects.ge/api/"


  getAll(url : string){
      return this.api.get(this.baseUrl + url , )
  }

  // {withCredentials : true}    //  ავტომატურად გავიიდეს ქუქი

    //   auth/login

  login(url : string, obj : LoingUser){
    return this.api.post(this.baseUrl2 +  url, obj )
  }

}
