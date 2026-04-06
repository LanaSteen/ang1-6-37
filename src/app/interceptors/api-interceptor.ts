import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

 const cloneRequst = req.clone({
    setHeaders : {
       'X-API-KEY' : '14c34c99-91b6-41a8-ad96-f4d3dc43e35b'
    }
 })


  return next(cloneRequst).pipe(
    catchError(error =>{
         if(error.status == 500){
          alert("ავტორიზებული არ ხართ")
         }
         else if(error.status == 404){
               alert("არასწორი მისამართი")
         }
         else{
          alert(error)
         }
         return throwError(() => error)
    })
  );
};
