import { Component } from '@angular/core';

import { IUserService } from '../../services/i.user.service';

@Component({
    selector: 'todo',
    template: require('./toDo.component.html')
})
export class ToDo {
    constructor(private userService: IUserService) {}
    inp: string;
    private getInput() {
        console.log(this.inp);
    }
}