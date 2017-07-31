import { Injectable } from '@angular/core';

import { IUserService } from '../';
import { Credentials, User } from '../../models';
import { Store } from '../../store/store';


@Injectable()
export class UserServicesMock implements IUserService {
  constructor (private store: Store) {
    store.currentUser = <User>{ email: '', lists: [] };
  }
  public register(credentials: Credentials): User {
    let user = new User();
    user.email = credentials.email;
    user.lists = null;
    this.store.saveUser(user);
    return user;
  }
  public getUser(): User {
    return this.store.currentUser;
  }
  public getUserVerbose(): User {
    return null;
  }
  public updateUser(email: string): User {
    this.store.currentUser.email = email; // ???
    return this.store.currentUser;
  }
  public delete(): User {
    this.store.deleteUser();
    return null;
  }
}