import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { IUserService } from '../';
import { User, Credentials } from '../../models';
import { BaseHttpService } from '.';
import { Store } from '../../store/store';

@Injectable()
export class UserHttpService extends BaseHttpService implements IUserService {
    constructor(http: Http, private readonly store: Store) {
        super(http);
    }

    public register(credential: Credentials): Promise<User> {
        return this.httpPost<User>('api/users', credential).then(user => this.store.saveUser(user));
    }

    public getUser(): Promise<User> {
        return this.httpGet<User>('api/users').then(user => this.store.saveUser(user));
    }

    public getUserVerbose(): Promise<User> {
        return this.httpGet<User>('users/verbose').then(user => this.store.saveUser(user));
    }

    public updateUser(email: string): Promise<User> {
        return this.httpPut<User>('api/users', email).then(user => this.store.saveUser(user));
    }

    public delete(): Promise<User> {
        return this.httpDelete('api/user').then(user => this.store.deleteUser());
    }
}