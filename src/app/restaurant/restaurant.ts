import { Component, OnInit } from '@angular/core';
import { category, Cetegory, Product } from '../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  imports: [FormsModule],
  templateUrl: './restaurant.html',
  styleUrl: './restaurant.scss',
})
export class Restaurant {




  // ngOnInit(){
  //  this.filterProdcuts = this.products
  //  console.log(this.name)
  // }

asc = "Asc"
ascspi= "Asc"

sort(){
  this.asc == "Desc" ?   this.asc  = "Asc" : this.asc = "Desc"
  if(this.asc == "Asc"){
           this.filterProdcuts = this.products
           
           this.filterProdcuts.sort((a:Product,b:Product)=> {
            if(a.price && b.price){
                return a.price - b.price
            }else{
                return 0
            }
           })
  }else{
     this.filterProdcuts = this.products
           
           this.filterProdcuts.sort((a:Product,b:Product)=> {
            if(a.price && b.price){
                return   b.price -a.price
            }else{
                return 0
            }
           })
  }

}


sort2(){
    this.ascspi == "Desc" ?   this.ascspi  = "Asc" : this.ascspi = "Desc"
    if(this.ascspi == "Asc"){
         this.filterProdcuts = this.products

         this.filterProdcuts.sort((a:Product,b:Product)=> {
          if(a.spiciness && b.spiciness){
              return a.spiciness - b.spiciness
          }else{
              return 0
          }
         })
    }
    else{
      this.filterProdcuts = this.products

         this.filterProdcuts.sort((a,b)=> {
          if(a.spiciness && b.spiciness){
              return  b.spiciness - a.spiciness 
          }else{
              return 0
          }
         })
    }
    
}

getid(obj : Product){
  console.log(obj)
}

id = 100
name ="k"

filter(input : string){
  this.filterProdcuts = this.products
   console.log(input)
  this.filterProdcuts = this.products.filter(el => el.name?.includes(input))
}

showAll(){
  this.filterProdcuts = this.products
}

filterByCat(id: number){
   this.filterProdcuts = this.products.filter(el => el.categoryId == id)
}

 filterProdcuts : Product[] = []
 products : Product[] = [
  {
    "id": 1,
    "name": "Laab kai chicken salad",
    "price": 10,
    "nuts": true,
    "image": "https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png",
    "vegeterian": false,
    "spiciness": 2,
    "categoryId": 1,
    "color" : ["pink", "blue", "green"],
    "categ" : category.men
  },
  {
    "id": 2,
    "name": "Som tam papaya salad",
    "price": 9.5,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png",
    "vegeterian": true,
    "spiciness": 0,
    "categoryId": 1,
   "color" : ["red", "blue", "green"]
  },
  {
    "id": 3,
    "name": "Tom yam kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_yam.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId": 2,
       "color" : ["yellow", "blue", "green"]
  },
  {
    "id": 4,
    "name": "Tom kha kai",
    "price": 7,
    "nuts": false,
    "image": "https://course-jsbasic.javascript.ru/assets/products/tom_kha.png",
    "vegeterian": false,
    "spiciness": 3,
    "categoryId": 2,
       "color" : ["red", "purple", "green"]
  }
]


categories : Cetegory[] =[
  {
    "id": 1,
    "name": "Salads"
  },
  {
    "id": 2,
    "name": "Soups"
  },
  {
    "id": 3,
    "name": "Chicken-Dishes"
  },
  {
    "id": 4,
    "name": "Beef-Dishes"
  },
  {
    "id": 5,
    "name": "Seafood-Dishes"
  },
  {
    "id": 6,
    "name": "Vegetable-Dishes"
  },
  {
    "id": 7,
    "name": "Bits&Bites"
  },
  {
    "id": 8,
    "name": "On-The-Side"
  }
]



}













