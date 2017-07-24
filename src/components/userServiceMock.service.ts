import { IUserService } from '../interfaces/IUserService';
import { User } from '../models/user';
import { Credentials } from '../models/credentials';


export class UserServicesMock implements IUserService {
  constructor (public store: any) {
    store.currentUser = <User>{ email: '', lists: []};
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
  public delete(): User{
    this.store.currentUser = null; // ???
    return null;
  }
}