import { Component } from '@angular/core';
import { List } from '../../models';
import { IListService } from '../../services/i.list.service';

@Component({
  selector: 'list',
  template: require('./list.c.html')
})
export class ListExample {
  private title: string;
  private id: number; // ???
  constructor(private iListService: IListService) {}

  private create() {
    this.iListService.createList(this.title);
  }
  private get() {
    this.iListService.getList(this.id).then(i => console.log(i));
  }
  private update() {
    this.iListService.updateList(this.id, this.title);
  }
  private delete() {
    this.iListService.delete(this.id);
  }
}