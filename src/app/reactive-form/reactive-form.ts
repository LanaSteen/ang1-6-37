import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {

  fb = new FormBuilder();

 




myForm :any = this.fb.group({
     firstName : ['', [Validators.required, Validators.minLength(3)]],
     email : ["", [Validators.required, Validators.email]],  
     password : ["", [Validators.required, Validators.minLength(8), Validators.pattern("")]]
})


login(){
  console.log(this.myForm.value)

  console.log(
    this.myForm.invalid
  );
  

}


}
