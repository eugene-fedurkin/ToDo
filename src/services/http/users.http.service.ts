import { Http, Response } from '@angular/http';
import { IUserService } from '../';
import { User, Credentials } from '../../models';
import { BaseHttpService } from '.';

export class UserHttpService extends BaseHttpService implements IUserService {
    constructor(protected readonly http: Http) {
        super(http);
    }

    public register(credential: Credentials): Promise<User> {
        return this.httpPost('users', credential);
    }

    public getUser(): Promise<User> {
        return this.httpGet('users');
    }

    public getUserVerbose(): Promise<User> {
        return this.httpGet('users/verbose');
    }

    public updateUser(email: string): Promise<User> {
        return this.httpPut('users', email);
    }

    public delete(): Promise<User> {
        throw new Error("Method not implemented.");
    }
}