import { Component, OnInit } from '@angular/core';

import { Credentials } from '../../models';
import { IUserService } from '../../services/i.user.service';
import { User } from '../../models';
import { Store } from '../../store/store';

@Component({
    selector: 'regist',
    template: require('./registration.c.html'),
    styles: [require('./registration.c.css')]
})
export class Register implements OnInit { // DoCheck dont work to this.user
    constructor(private userService: IUserService,
        private readonly store: Store) {}
    private newEmail: string;
    private pass: any;
    private toggleButtons: boolean = false;
    private toggleModal: boolean = true;
    
    public get user(): User {
        return this.store.currentUser;
    }

    public ngOnInit(): void {
        this.userService.getUser().catch(e => console.error(e));
    }

    private turnModal() {
        this.toggleModal = !this.toggleModal;
        console.log(this.toggleModal)
    }

    private register() {
        let credential = new Credentials();
        credential.email = this.newEmail;
        credential.password = this.pass;
        this.userService.register(credential);
        console.log(this.newEmail);
        this.toggleButtons = !this.toggleButtons;
        this.toggleModal = !this.toggleModal;
    }

    private changeEmail() {
        this.userService.updateUser(this.newEmail);
    }

    private deleteUser() {
        this.userService.delete();
        this.toggleButtons = !this.toggleButtons;
    }
}