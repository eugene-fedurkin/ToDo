import { User, List, Item } from '../models/';

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
    for (let i = 0; i < this.store.lists.length; i++) {
      if (this.store.lists[i].title === currentList.title) {
        this.store.lists.splice(i, 1);
        return;
      }
    }
  }
  public addItem(currentList: List, currentItem: Item) {
    for (let i = 0; i < this.store.lists.length; i++) {
      if (currentList.title === this.store.lists[i].title) {
        for (let item of this.store.lists[i].items) {
          if (item.title === currentItem.title) {
            console.log('item with this name already exists');
            return;
          }
        }
        this.store.lists[i].items.push(currentItem);
      }
    }
  }

  public deleteItem(currentList: List, currentItem: Item) {
    for (let i = 0; i < this.store.lists.length; i++) {
      if (currentList.title === this.store.lists[i].title) {
        for (let j = 0; j < this.store.lists[i].items.length; j++) {
          if (this.store.lists[i].items[j].title === currentItem.title) {
            this.store.lists[i].items.splice(j, 1);
            return;
          }
        }
      }
    }
  }
}