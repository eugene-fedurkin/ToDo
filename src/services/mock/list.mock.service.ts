import { Injectable } from '@angular/core';


import { IListService } from '../';
import { List, Item } from '../../models/';
import { Store } from '../../store/store';

@Injectable()
export class ListServicesMock implements IListService {
  constructor(private store: Store) {}

  private nextId: number = 0;

  createList(list: List): Promise<List> {
    list.id = this.nextId++;
    this.store.saveList(list);
    return Promise.resolve(list);
  }

  getList(id: number): Promise<List> {
    for (let list of this.store.currentUser.lists) { 
      if (list.id === id)
        return Promise.resolve(list);
    }
    return Promise.reject(new Error("error"));
  }

  getListVerbose(): Promise<List> {
    return Promise.reject(this.store.currentUser.lists); 
  }

  updateList(list: List): Promise<List> { //can create list
    return this.store.saveList(list);
  }

  delete(id: number): Promise<List> {
    this.store.deleteList(id);
    return null;
  }
}