import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';

@Injectable({   //hace que sea injectable para el injector de dependencia
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser (user:UserModel)
  {
    console.log(user);
  }
}


