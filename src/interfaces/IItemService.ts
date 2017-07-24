import { Item } from '../models/item';

export interface IItemService {
  createItem(item: Item): Item;
  getItem(): Item;
  getItemVerbose(): Item;
  getItemInList(): Item;
  getItemVerboseInList(): Item;
  updateItem(item: Item): Item;
  delete(): Item;
}