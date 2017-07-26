import { Item } from '../models/';

export interface IItemService {
  createItem(item: Item): Promise<Item>;
  getItem(): Promise<Item>;
  getItemVerbose(): Promise<Item>;
  getItemInList(): Promise<Item>;
  getItemVerboseInList(): Promise<Item>;
  updateItem(item: Item): Promise<Item>;
  delete(): Promise<Item>;
}