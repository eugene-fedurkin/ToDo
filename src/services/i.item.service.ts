import { Item } from '../models/';

export abstract class IItemService {
  abstract createItem(item: Item): Promise<Item>;
  abstract getItem(listId: number, id: number): Promise<Item>;
  abstract getItemVerbose(): Promise<Item>;
  abstract getItemInList(listId: number, id: number): Promise<Item>;
  abstract getItemVerboseInList(): Promise<Item>;
  abstract updateItem(item: Item, listId: number): Promise<Item>;
  abstract delete(listId: number, id: number): Promise<Item>;
}