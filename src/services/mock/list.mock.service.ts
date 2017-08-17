import { Injectable } from '@angular/core';


import { IListService } from '../';
import { List, Item } from '../../models/';
import { Store } from '../../store/store';

@Injectable()
export class ListServicesMock implements IListService {

  constructor(private store: Store) { }

  private nextId: number = 0;

  createList(title: string): Promise<List> {
    let list = new List();
    list.id = this.nextId++;
    list.title = title;
    list.items = [];
    this.store.saveList(list);
    return Promise.resolve(list);
  }

  getLists(id: number): Promise<List[]> {
    return Promise.resolve(this.store.currentUser.lists)
  }
  
  getListsVerbose(id: number): Promise<List> {
    throw new Error("Method not implemented.");
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

  updateList(id: number, title: string): Promise<List> { //can create list
    let list = new List();
    list.id = id;
    list.title = title;
    list.items = [];
    return this.store.saveList(list);
  }

  delete(id: number): Promise<List> {
    this.store.deleteList(id);
    return null;
  }
}