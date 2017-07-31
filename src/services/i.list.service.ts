import { List } from '../models/';

export abstract class IListService {
  abstract createList(list: List): Promise<List>;
  abstract getList(id: number): Promise<List>;
  abstract getListVerbose(): Promise<List>;
  abstract updateList(list: List, id: number): Promise<List>;
  abstract delete(id: number): Promise<List>;
}