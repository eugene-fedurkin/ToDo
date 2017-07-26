import { Injectable } from '@angular/core';


import { IItemService, UserServicesMock } from '../';
import { Item } from '.../models/';

@Injectable()
export class ItemServiceMock implements IItemService {
  constructor(private userServicesMock: UserServicesMock) {
    userServicesMock.store.currentList.lists.items = [<Item>{ id: 1, title: '', description: '', listId: 2 }];
  }
  public createItem(item: Item): Item {
    let itemNew = new Item;
    itemNew.id = item.id;
    itemNew.title = item.title;    
    itemNew.description = item.description;    
    itemNew.listId = item.listId;

    this.userServicesMock.store.currentList.lists.items = itemNew;
    return this.userServicesMock.store.currentList.lists.items ;
  }
  public getItem(): Item {
    return this.userServicesMock.store.currentList.lists.items;
  }
  public getItemVerbose(): Item {
    return null;
  }
  public getItemInList(): Item {
    return this.userServicesMock.store.currentList.lists.items;
  }
  public getItemVerboseInList(): Item {
    return null;
  }
  public updateItem(item: Item): Item {
    this.userServicesMock.store.currentList.lists.items.title = item.title;
    this.userServicesMock.store.currentList.lists.items.listId = item.listId;
    this.userServicesMock.store.currentList.lists.items.description = item.description;
    
    return this.userServicesMock.store.currentList.lists;
  }
  public delete(): Item {
    this.userServicesMock.store.currentList.lists.items = null;
    return null;
  }
}
