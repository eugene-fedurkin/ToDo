import { List } from '../models/';

export interface IListService {
  createList(list: List): Promise<List>;
  getList(): Promise<List>;
  getListVerbose(): Promise<List>;
  updateList(title: string): Promise<List>;
  delete(): Promise<List>;
}