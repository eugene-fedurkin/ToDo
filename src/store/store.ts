import { User, List } from '../models/';

import { Injectable } from '@angular/core';

export class Store {
  public store: User;

  public addUser(user: User) {
    if (!this.store) this.store = user;
  }

  public deleteUser() {
    this.store = null;
  }

  public addList(currentList: List) {
    for (let list of this.store.lists) {
      if (list.title === currentList.title) {
        console.log('list with this name already exists');
        return;
      }
    }
    this.store.lists.push(currentList);
  }

  public deleteList(currentList: List) {
    for (let list of this.store.lists) {
      if (list.title === currentList.title) {
        // delete
        return;
      }
    }
  }
}