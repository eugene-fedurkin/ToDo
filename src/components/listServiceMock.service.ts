import { IListService } from '../interfaces/IListService';
import { List } from '../models/list';
import { Item } from '../models/item';

import { UserServicesMock } from './userServiceMock.service';

export class ListServicesMock implements IListService {
  constructor(private userServicesMock: UserServicesMock) {
    userServicesMock.store.currentList = <List>{ id: 1, title: '', items: Item[]};
  }
  createList(list: List): List {
    let listNew = new List;
    listNew.id = list.id;
    listNew.title = list.title;
    listNew.items = list.items;
    this.userServicesMock.store.currentList = listNew;
    return listNew;
  }
  getList(): List {
    return this.userServicesMock.store.currentList;
  }
  getListVerbose(): List {
    return null; 
  }
  updateList(title: string): List {
    this.userServicesMock.store.currentList.title = title;
    return this.userServicesMock.store.currentList.title;
  }
  delete(): List {
    return null
  }
}