import { Component } from '@angular/core';
import { Api } from '../services/api';
import { Cetegory, Product, Product2 } from '../models/product';
import { catchError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-restaurant-api',
  imports: [],
  templateUrl: './restaurant-api.html',
  styleUrl: './restaurant-api.scss',
})
export class RestaurantApi {

    constructor(private api : Api){

    }
    ngOnInit(){
      this.api.getAll("Products/GetAll").subscribe((data:any) => {
          console.log(data);
          this.productsArr = data
          
      })
           this.api.getAll("Categories/GetAll")
           .pipe(
             takeUntilDestroyed()
           )
           .subscribe({
             next : (data:any) => {
            this.categoriesArr = data
            console.log(data);
          
             },
             error : (er => {
                console.log(er);
                
             })
           })

    }


    

   categoriesArr : Cetegory[] = []
   productsArr  :Product2[] = []
}
