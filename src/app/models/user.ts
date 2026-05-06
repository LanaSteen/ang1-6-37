export interface IUser {
  userName: string | null;
}

export class User implements IUser {
  userName: string = '';
}

export class LoingUser {
  constructor() {}
  email!: string;
  password!: string;

  // checkEmail(){
  //     if(this.email.includes("@")){
  //         return true
  //     }
  //     return false
  //   }
}

export class Registeruser {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
}
