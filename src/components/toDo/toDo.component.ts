import { Component } from '@angular/core';

import { Credentials } from '../../models';
import { IUserService } from '../../services/i.user.service';

@Component({
    selector: 'todo',
    template: require('./toDo.component.html')
})
export class ToDo {
    constructor(private userService: IUserService) {}
    private newEmail: string;
    private pass: any;
    private register() {
        let credential = new Credentials();
        credential.email = this.newEmail;
        credential.password = this.pass;
        this.userService.register(credential);
        console.log(this.newEmail);
    }

    private getUser() {
        this.userService.getUser().then(i => console.log(i))
    }

    private changeEmail() {
        this.userService.updateUser(this.newEmail);
    }

    private deleteUser() {
        this.userService.delete();
    }
}