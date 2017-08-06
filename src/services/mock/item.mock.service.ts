import { Injectable } from '@angular/core';

import { IItemService } from '../';
import { Store } from '../../store/store';
import { Item } from '../../models/';

@Injectable()
export class ItemServiceMock implements IItemService {
  constructor(private store: Store) {}

  private nextId: number = 0;

  public createItem(item: Item): Promise<Item> {
    item.id = this.nextId++;

    this.store.saveItem(item);
    return Promise.resolve(item);
  }
  public getItem(listId: number, id: number): Promise<Item> { // id ???
    let list = this.store.currentUser.lists.find(list => list.id === listId);
    for (let item of list.items) {
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

  public updateItem(item: Item): Promise<Item> {
    this.store.saveItem(item);    
    return;
  }
  
  public delete(listId: number, id: number): Promise<Item> {
    this.store.deleteItem(listId, id);
    return null;
  }
}
