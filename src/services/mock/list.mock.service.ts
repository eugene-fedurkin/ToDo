import { Injectable } from '@angular/core';


import { IListService } from '../';
import { List, Item } from '../../models/';
import { Store } from '../../store/store';

@Injectable()
export class ListServicesMock implements IListService {
  constructor(private store: Store) {}

  private nextId: number = 0;

  createList(list: List): Promise<List> {
    let listNew = new List();
    listNew.id = this.nextId++;
    listNew.title = list.title;
    listNew.items = list.items;
    this.store.saveList(listNew);
    return Promise.resolve(listNew);
  }

  getList(id: number): Promise<List> {
    for (let list of this.store.currentUser.lists) { 
      if (list.id === id)
        return Promise.resolve(list);
    }
    return Promise.reject(new Error("error"));
  }

  getListVerbose(): Promise<List> {
    return null; 
  }

  updateList(list: List, id: number): Promise<List> {
    return this.store.saveList(list, id);
  }

  delete(id: number): Promise<List> {
    this.store.deleteList(id);
    return null;
  }
}