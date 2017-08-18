import { User, List, Item } from '../models/';

import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  public currentUser: User;

  public saveUser(user: User): User {
    if (!this.currentUser) this.currentUser = user;
    else return this.currentUser;
  }

  public deleteUser(): User {
    this.currentUser = null;
    return this.currentUser;
  }

  public saveList(currentList: List) {
    if (!this.currentUser.lists) {
      this.currentUser.lists = [currentList];
      return;
    }
    for (let list of this.currentUser.lists) {
      if (list.id === currentList.id) {
        this.updateListProps(list, currentList);
        return Promise.resolve(list);
      }
    }
    this.currentUser.lists.push(currentList);
    return Promise.resolve(currentList);
  }

  public saveLists(currentLists: List[]): List[] {
    if (!this.currentUser.lists) {
      this.currentUser.lists = currentLists;
      return currentLists;
    }
    for (let list of currentLists) {
      this.saveList(list);
    }
    return currentLists;
  }

  public deleteList(id: number): List {
    for (let i in this.currentUser.lists) {
      if (this.currentUser.lists[i].id === id) {
        this.currentUser.lists.splice(+i, 1);
        return;
      }
    }
  }

  public saveItem(currentItem: Item): Item {
    let list = this.currentUser.lists.find(list => list.id === currentItem.listId);

    for (let item in list.items) {
      if (list.items[item].id === currentItem.id) {
        list.items.splice(+item, 1, currentItem);
        this.updateItemProps(list.items[item], currentItem);
        return list.items[item];
      }
    }
    list.items.push(currentItem);
    return currentItem;
  }

  public saveItems(currentItems: Item[]): Item[] {
    let savedItems = [];
    for (let item of currentItems) {
      this.saveItem(item);
      savedItems.push(item);
    }
    let list = this.currentUser.lists.find(list => list.id === currentItems[0].listId);
    return list.items;
  }

  public deleteItem(id: number): Item {
    for (let list of this.currentUser.lists) {
      for (let item in list.items) {
        if (list.items[item].id === id) {
          list.items.splice(+item, 1);
          return;
        }
      }
    }
  }

  private updateItemProps(pastItem: Item, requiredItem: Item) {
    pastItem.title = requiredItem.title;
    pastItem.description = requiredItem.description;
  }

  private updateListProps(pastList: List, requiredList: List) {
    pastList.title = requiredList.title;
    pastList.items = requiredList.items;
  }

}