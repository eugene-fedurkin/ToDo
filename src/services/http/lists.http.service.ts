import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { IListService } from '../';
import { BaseHttpService } from './';
import { List } from '../../models';
import { Store } from '../../store/store';

@Injectable()
export class ListHttpService extends BaseHttpService implements IListService {
    constructor (protected readonly http: Http, private store: Store) {
        super(http);
    }

    getLists(id: number): Promise<List[]> { // need saveLists
        return this.httpGet<List[]>(`/api/lists/${id}`).then(lists => this.store.saveLists(lists));
    }

    getListsVerbose(id: number): Promise<List> {
        return this.httpGet<List>(`/api/lists/${id}/verbose`).then(list => this.store.saveList(list));
    }

    createList(title: string): Promise<List> {
        return this.httpPost<List>('api/lists', title).then(list => this.store.saveList(list));
    }

    getList(id: number): Promise<List> {
        return this.httpGet<List>(`/api/lists/${id}`).then(list => this.store.saveList(list));
    }

    getListVerbose(id: number): Promise<List> {
        return this.httpGet<List>(`/api/lists/${id}/verbose`).then(list => this.store.saveList(list));
    }

    updateList(id: number, title: string): Promise<List> {
        return this.httpPut<List>(`/api/lists/${id}`, title).then(list => this.store.saveList(list))
    }

    delete(id: number): Promise<List> {
        return this.httpDelete<List>(`/api/lists/${id}`).then(list => this.store.deleteList(list.id));
    }
}