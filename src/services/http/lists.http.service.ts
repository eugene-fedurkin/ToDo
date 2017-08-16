import { IListService } from '../';
import { BaseHttpService } from './';
import { List } from '../../models';


export class ListHttpService extends BaseHttpService implements IListService {

    getLists(id: number): Promise<List> {
        return this.httpGet(`/api/lists/${id}`);
    }

    getListsVerbose(id: number): Promise<List> {
        return this.httpGet(`/api/lists/${id}/verbose`);
    }

    createList(title: string): Promise<List> { // list?
        return this.httpPost('api/lists', title);
    }

    getList(id: number): Promise<List> {
        return this.httpGet(`/api/lists/${id}`);
    }

    getListVerbose(id: number): Promise<List> {
        return this.httpGet(`/api/lists/${id}/verbose`);
    }

    updateList(id: number, title: string): Promise<List> {
        return this.httpPut(`/api/lists/${id}`, title) // list?
    }

    delete(id: number): Promise<List> {
        return this.httpDelete(`/api/lists/${id}`);
    }
}