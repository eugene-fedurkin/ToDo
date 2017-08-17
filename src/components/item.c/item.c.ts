import { Component } from '@angular/core';
import { IItemService } from '../../services/i.item.service';
import { Item } from '../../models';

@Component({
  selector: 'items',
  template: require('./item.c.html')
})
export class ItemExample {
  private title: string;
  private listId: number;
  private id: number;

  constructor(private iItemService: IItemService) {
  }

  private create() {
    let item = new Item();
    item.title = this.title;
    item.listId = this.listId;
    item.description = '';
    this.iItemService.createItem(item);
  }

  private getItem() {
    this.iItemService.getItem(this.id).then(i => console.log(i));
  }
  
  private update() {
    let item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.listId = this.listId;
    item.description = '';
    this.iItemService.updateItem(this.id, item);// id~
  }
}