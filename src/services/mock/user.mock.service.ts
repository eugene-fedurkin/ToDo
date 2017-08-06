import { Injectable } from '@angular/core';

import { IUserService } from '../';
import { Credentials, User } from '../../models';
import { Store } from '../../store/store';
import { MockInitializer } from './store.mock.initializer';


@Injectable()
export class UserServicesMock implements IUserService {
  constructor (public store: Store) {
    MockInitializer.initialize(store);
  }
  public register(credentials: Credentials): Promise<User> {
    let user = new User();
    user.email = credentials.email;
    user.lists = null;
    this.store.saveUser(user);
    return Promise.resolve(user);
  }
  public getUser(): Promise<User> {
    return Promise.resolve(this.store.currentUser);
  }
  public getUserVerbose(): Promise<User> {
    return null;
  }
  public updateUser(email: string): Promise<User> {
    this.store.currentUser.email = email; // ???
    return Promise.resolve(this.store.currentUser);
  }
  public delete(): Promise<User> {
    this.store.deleteUser();
    return null;
  }
}