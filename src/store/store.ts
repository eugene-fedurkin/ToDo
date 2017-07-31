import { User, List, Item } from '../models/';

import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  public currentUser: User;

  public saveUser(user: User) {
    if (!this.currentUser) this.currentUser = user;
  }

  public deleteUser() {
    this.currentUser = null;
  }

  public saveList(currentList: List, id?: number) {
    for (let list of this.currentUser.lists) {
      if (list.id === currentList.id) list.title = currentList.title;
      return Promise.resolve(list);
    }
    this.currentUser.lists.push(currentList);
    return Promise.resolve(currentList);
  }

  public deleteList(id: number) {
    for (let i in this.currentUser.lists) {
      if (this.currentUser.lists[i].id === id) {
        this.currentUser.lists.splice(+i, 1);
        return;
      }
    }
  }

  public saveItem(currentItem: Item, listId?: number) {
    let list = this.currentUser.lists.find(list => list.id === listId);
    //let item = list.items.find(item => currentItem.id === item.id);
    
    for (let item in list.items) {
      if (list.items[item].id === currentItem.id) {
        list.items.splice(+item, 1, currentItem);
        return;
      }
    }
    list.items.push(currentItem);
  }

  public deleteItem(listId: number, id: number) {
    let list = this.currentUser.lists.find(list => list.id === listId);
    
    for (let item in list.items) {
      if (list.items[item].id === id) {
        list.items.splice(+item, 1);
        return;
      }
    }
  }
}