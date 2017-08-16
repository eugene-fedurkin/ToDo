import { Item } from '../models/';

export abstract class IItemService {
  abstract createItem(item: Item): Promise<Item>;
  abstract getItem(id: number): Promise<Item>;
  abstract getItemVerbose(id: number): Promise<Item>;
  abstract getItemsInList(listId: number): Promise<Item>;
  abstract getItemsInListVerbose(listId: number): Promise<Item>;
  abstract updateItem(id: number): Promise<Item>;
  abstract delete(id: number): Promise<Item>;
}