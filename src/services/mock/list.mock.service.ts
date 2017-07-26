import { Injectable } from '@angular/core';


import { IListService, UserServicesMock } from '../';
import { List, Item } from '.../models/';

@Injectable()
export class ListServicesMock implements IListService {
  constructor(private userServicesMock: UserServicesMock) {
    userServicesMock.store.currentList.lists = [<List>{ id: 1, title: '', items: [] }]; // --- Array?
  }
  createList(list: List): List {
    let listNew = new List;
    listNew.id = list.id;
    listNew.title = list.title;
    listNew.items = list.items;
    this.userServicesMock.store.currentList.lists = listNew;
    return listNew;
  }
  getList(): List {
    return this.userServicesMock.store.currentList.lists;
  }
  getListVerbose(): List {
    return null; 
  }
  updateList(title: string): List {
    this.userServicesMock.store.currentList.lists.title = title;
    return this.userServicesMock.store.currentList.lists.title;
  }
  delete(): List {
    this.userServicesMock.store.currentList.lists = null;
    return null;
  }
}