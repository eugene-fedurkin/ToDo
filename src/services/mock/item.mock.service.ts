import { Injectable } from '@angular/core';

import { IItemService } from '../';
import { Store } from '../../store/store';
import { Item } from '../../models/';

@Injectable()
export class ItemServiceMock implements IItemService {
  
  getItemsInList(listId: number): Promise<Item[]> {
    throw new Error("Method not implemented.");
  }
  constructor(private store: Store) { }

  private nextId: number = 0;

  public createItem(item: Item): Promise<Item> {
    item.id = this.nextId++;

    this.store.saveItem(item);
    return Promise.resolve(item);
  }
  public getItem(id: number): Promise<Item> {
    for (let list of this.store.currentUser.lists) {
      for (let item of list.items) {
        if (item.id === id) return Promise.resolve(item);
      }
    }
  }

  public getItemVerbose(): Promise<Item> {
    return null;
  }

  public getItemsInListVerbose(): Promise<Item> {
    return null;
  }

  public updateItem(id: number, item: Item): Promise<Item> {// id not use
    this.store.saveItem(item);
    return;
  }
  
  public delete(id: number): Promise<Item> {
    this.store.deleteItem(id);
    return null;
  }
}
