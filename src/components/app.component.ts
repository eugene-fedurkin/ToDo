import { Component, OnInit } from '@angular/core';

import { Credentials } from './../models';
import { IUserService } from './../services/i.user.service';
import { User } from './../models';
import { Store } from './../store/store';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.components.css')]
})
export class AppComponent implements OnInit {
    constructor(private store: Store, private userService: IUserService) {}

    private toggleButtons: boolean;
    
    public ngOnInit(): void {
        this.userService.getUser().then(r => {
            if (this.store.currentUser) this.toggleButtons = true;
            else this.toggleButtons = false;
        }).catch(e => console.error(e));
    }

    public get user(): User {
        return this.store.currentUser;
    }
}