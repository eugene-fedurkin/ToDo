import { Http, Response } from '@angular/http';
import { IUserService } from '../';
import { User, Credentials } from '../../models';
import { BaseHttpService } from '.';

export class UserHttpService extends BaseHttpService implements IUserService {
    constructor(protected readonly http: Http) {
        super(http);
    }

    public register(credential: Credentials): Promise<User> {
        return this.httpPost('api/users', credential);
    }

    public getUser(): Promise<User> {
        return this.httpGet('api/users');
    }

    public getUserVerbose(): Promise<User> {
        return this.httpGet('users/verbose');
    }

    public updateUser(email: string): Promise<User> {
        return this.httpPut('api/users', email);
    }

    public delete(): Promise<User> {
        return this.httpDelete('api/user');
    }
}