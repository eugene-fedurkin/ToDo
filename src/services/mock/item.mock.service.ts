import { Injectable } from '@angular/core';


import { IItemService } from '../';
import { Store } from '../../store/store';
import { Item } from '../../models/';

@Injectable()
export class ItemServiceMock implements IItemService {
  constructor(private store: Store) {}

  private nextId: number = 0;

  public createItem(item: Item): Promise<Item> {
    let newItem = new Item();
    newItem.id = this.nextId++;
    newItem.title = item.title;    
    newItem.description = item.description;
    newItem.listId = item.listId;

    this.store.saveItem(newItem);
    return Promise.resolve(newItem);
  }
  public getItem(listId: number, id: number): Promise<Item> { // id ???
    for (let item of this.store.currentUser.lists[listId].items) {
      if (item.id === id) return Promise.resolve(item);
    }
  }

  public getItemVerbose(): Promise<Item> {
    return null;
  }

  public getItemInList(listId: number, id: number): Promise<Item> { // ???
    return this.getItem(listId, id);
  }
  public getItemVerboseInList(): Promise<Item> {
    return null;
  }
  public updateItem(item: Item, listId: number): Promise<Item> {
    this.store.saveItem(item, listId);    
    return;
  }
  public delete(listId: number, id: number): Promise<Item> {
    this.store.deleteItem(listId, id);
    return null;
  }
}
