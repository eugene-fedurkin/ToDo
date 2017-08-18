import { Component } from '@angular/core';
import { Store } from '../../store/store';
import { Credentials } from '../../models';
import { IUserService } from '../../services/i.user.service';

@Component({
    selector: 'regist',
    template: require('./sign-in.c.html'),
    styles: [require('./sign-in.c.css')]
})
export class SignIn {
    constructor(private userService: IUserService,
        private readonly store: Store) {}

        private newEmail: string;
        private pass: any;
        private validationMessage: string = 'Incorrect your email or password';

    private signIn() {
        const regExp = /^\w+@\w{2,8}\.\w{2,4}$/i;

        if (!regExp.test(this.newEmail)) {
            this.validationMessage = 'Incorrect your email';
            return;
        }
        if (this.pass.length < 8 || this.pass.length > 64) {
            this.validationMessage = 'Password must be 8 - 64 symbols';
            return;
        }
        let credential = new Credentials();
        credential.email = this.newEmail;
        credential.password = this.pass;
        this.userService.register(credential);
    }
}