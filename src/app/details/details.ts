import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from '../services/helper';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  constructor(
     private rout : ActivatedRoute,
     private helpeer : Helper,
   
      )
     {
    rout.queryParams.subscribe((el : any) => console.log(el.id));
    rout.queryParams.subscribe(el => console.log(el['id']));

   rout.queryParams.subscribe((el : any) => {
    this.selectedProductId = el.id
   });
    
  }


  ngOnInit(){
    this.helpeer.print()
    console.log(this.helpeer.userName);
    
  }

   selectedProductId! : number

}


// observable   .subscribe 
// promise  .then 