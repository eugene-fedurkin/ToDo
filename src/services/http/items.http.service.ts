import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { IItemService } from '../';
import { BaseHttpService } from './';
import { Item } from '../../models';
import { Store } from '../../store/store';

@Injectable()
export class ItemHttpService extends BaseHttpService implements IItemService {
    constructor (protected readonly http: Http, private store: Store) {
        super(http);
    }

    createItem(item: Item): Promise<Item> {
        return this.httpPost<Item>('/api/items', item).then(item => this.store.saveItem(item));
    }

    getItem(id: number): Promise<Item> {
        return this.httpGet<Item>(`/api/items/${id}`).then(item => this.store.saveItem(item));
    }

    getItemVerbose(id: number): Promise<Item> {
        return this.httpGet<Item>(`/api/items/${id}/verbose`).then(item => this.store.saveItem(item));
    }

    getItemsInList(listId: number): Promise<Item> {
        return this.httpGet<Item>(`/api/items/in-list/${listId}`).then(item => this.store.saveItem(item));
    }

    getItemsInListVerbose(listId: number): Promise<Item> {
        return this.httpGet<Item>(`/api/items/in-list/${listId}/verbose`).then(item => this.store.saveItem(item));
    }

    updateItem(id: number, item: Item): Promise<Item> {
        return this.httpPut<Item>(`/api/items/${id}`, item).then(item => this.store.saveItem(item));
    }
    delete(id: number): Promise<Item> {
        return this.httpDelete<Item>(`/api/items/${id}`).then(item => this.store.deleteItem(item.id));
    }
}