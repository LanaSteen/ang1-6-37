import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Dialog } from '../services/dialog';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const dialog = inject(Dialog)


   if(localStorage.getItem("token") != null){

    return true
   }

  // alert("Please Login")
  dialog.show("Please Login")
  router.navigate(["/login"])
  return false;
};
