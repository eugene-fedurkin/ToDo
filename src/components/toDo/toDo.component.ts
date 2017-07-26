import { Component } from '@angular/core';

import { UserServicesMock } from '../userServiceMock.service';
@Component({
    selector: 'todo',
    template: require('./toDo.component.html')
})
export class ToDo {
    inp: string;
    constructor(private userServicesMock: UserServicesMock) {
    }
    private getInput() {
        console.log(this.userServicesMock)
        console.log(this.inp);
    }
}