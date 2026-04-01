
export class Product{
  constructor(){

    
  }
  id! : number;
  name? : string ;
  price? : number;
  nuts? : boolean;
  image? : string;
  vegeterian? : boolean;
  spiciness? : number;
  categoryId? : number;
  color? : string[];
  categ? : category
}


export class Cetegory {
  id!:number;
  name? : string
}



export enum category {
  men = "Men's clo",
  women = "Women's clothing",
  electornics = "Electronics"
}