import { ChangeDetectorRef, Component, DestroyRef } from '@angular/core';
import { Api } from '../services/api';
import { Cetegory, Product, Product2 } from '../models/product';
import { catchError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Button } from "../button/button";

@Component({
  selector: 'app-restaurant-api',
  imports: [Button],
  templateUrl: './restaurant-api.html',
  styleUrl: './restaurant-api.scss',
})
export class RestaurantApi {
 
    constructor(private api : Api,  
      private destroyRef :DestroyRef ,
      private cdr : ChangeDetectorRef){

    }

    textVar = "start to order"
    ngOnInit(){


      // https://restaurantapi.stepacademy.ge/api/products

    this.api.getAll2("products").subscribe({
      next : (data:any) => {
       console.log(data.data.products);
       this.newProductArr = data.data.products
       this.cdr.detectChanges()
       

    },
     error: er => console.log(er)
     })


      // this.api.getAll("Products/GetAll").subscribe((data:any) => {
      //     console.log(data);
      //     this.productsArr = data

      //     this.cdr.detectChanges()
          
      // })
      //      this.api.getAll("Categories/GetAll")
      //     //  .pipe(
      //     //    takeUntilDestroyed(this.destroyRef)
      //     //  )
      //      .subscribe({
      //        next : (data:any) => {
      //       this.categoriesArr = data
      //       console.log(data);
      //        this.cdr.detectChanges()
          
      //        },
      //        error : (er => {
      //           console.log(er);
                
      //        })
      //      })

    }


    newProductArr : any[] = []

   categoriesArr : Cetegory[] = []
   productsArr  :Product2[] = []
}
