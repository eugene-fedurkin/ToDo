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
    let list = new List();
    list.title = this.title;
    list.items = [];
    this.iListService.createList(list);
  }
  private get() {
    this.iListService.getList(this.id).then(i => console.log(i));
  }
  private update() {
    let list = new List();
    list.title = this.title;
    list.id = this.id;
    this.iListService.updateList(list);    
  }
  private delete() {
    this.iListService.delete(this.id);
  }
}