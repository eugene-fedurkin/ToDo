import { Injectable } from '@angular/core';

import { IUserService } from '../';
import { Credentials, User } from '.../models/';

@Injectable()
export class UserServicesMock implements IUserService {
  constructor (public store: any) {
    store.currentUser = <User>{ email: '', lists: [] };
  }
  public register(credentials: Credentials): User {
    let user = new User;
    user.email = credentials.email;
    user.lists = null;
    this.store.currentUser = user;
    return user;
  }
  public getUser(): User {
    return this.store.currentUser;
  }
  public getUserVerbouse(): User {
    return null;
  }
  public updateUser(email: string): User {
    this.store.currentUser = email;
    return this.store.currentUser.email;
  }
  public delete(): User {
    this.store.currentUser = null; // ???
    return null;
  }
}