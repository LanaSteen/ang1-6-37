import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoingUser } from '../models/user';
import { Api } from '../services/api';
import { Auth } from '../services/auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.scss',
})
export class LoginApi {
  constructor(
    private api: Api,
    private auth: Auth,
    private cookieService : CookieService
  ) {}

  // loginUser : LoingUser = new LoingUser()
  loginUser: LoingUser = {
    email: 'stepacc210@gmail.com',
    password: 'Stepacc210@gmail.com',
  };
  login(myForm: any) {
    // console.log(myForm.valid);

    if (myForm.valid) {
      console.log(myForm.value);
      this.api.login('auth/login', myForm.value).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);

        this.cookieService.set('accessToken', res.data.accessToken, {
          expires: 1, // days
          path: '/',
          secure: true,
          sameSite: 'Lax',
        });
      
        // this.cookieService.deleteAll()
        this.auth.isAuthed();
      });
    } else {
      alert('form is not valid ');
    }
  }

  // email : any
  // password : any
}
