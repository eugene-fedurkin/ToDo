import { IItemService } from '../';
import { BaseHttpService } from './';
import { Item } from '../../models';

export class ItemsHttpService extends BaseHttpService implements IItemService {
    
    createItem(item: Item): Promise<Item> {
        return this.httpPost('/api/items', item);
    }

    getItem(id: number): Promise<Item> {
        return this.httpGet(`/api/items/${id}`);
    }

    getItemVerbose(id: number): Promise<Item> {
        return this.httpGet(`/api/items/${id}/verbose`);
    }

    getItemsInList(listId: number): Promise<Item> {
        return this.httpGet(`/api/items/in-list/${listId}`);
    }

    getItemsInListVerbose(listId: number): Promise<Item> {
        return this.httpGet(`/api/items/in-list/${listId}/verbose`);
    }

    updateItem(id: number): Promise<Item> {
        return this.httpGet(`/api/items/${id}`);
    }
    delete(id: number): Promise<Item> {
        return this.httpGet(`/api/items/${id}`);
    }
}