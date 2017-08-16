import { List } from '../models/';

export abstract class IListService {
  abstract createList(title: string): Promise<List>;
  abstract getList(id: number): Promise<List>;
  abstract getListVerbose(id: number): Promise<List>;
  abstract getLists(id: number): Promise<List>;
  abstract getListsVerbose(id: number): Promise<List>;
  abstract updateList(id: number, title: string): Promise<List>;
  abstract delete(id: number): Promise<List>;
}