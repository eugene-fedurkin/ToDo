import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template: require('./child-example.component.html')
})
export class ChildComponent { 
    @Output() evChanged = new EventEmitter<boolean>();
    change(increased: boolean) {
        this.evChanged.emit(increased);
    }
}