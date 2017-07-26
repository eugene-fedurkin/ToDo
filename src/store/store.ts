import { User, List } from '../models/';

import { Injectable } from '@angular/core';

export class Store {
  public store: User[];

  public addUser(user: User) {
    for (let i of this.store) {
      if (i.email === user.email) {
        console.log('User exist');
        return;
      }
    }
    this.store.push(user);
  }

  public deleteUser(currentUser: User) {
    for (let i of this.store) {
      if (i.email === currentUser.email) {
        this.store.splice(this.store.indexOf(i), 1);
        return;
      }
    }
  }

  public addList(user: User, currentList: List) {
    for (let savedUser of this.store) {
      if (savedUser.email === user.email) {
        for (let list of savedUser.lists) {
          if (list.title === currentList.title) {
            console.log('list with this name already exists');
            return;
          }
        }
        savedUser.lists.push(currentList);
      }
    }
  }

    public deleteList(user: User, currentList: List) {
    for (let savedUser of this.store) {
      if (savedUser.email === user.email) {
        for (let list of savedUser.lists) {
          if (list.title === currentList.title) {
            // delete
            return;
          }
        }
      }
    }
  }
}