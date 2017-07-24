import { List } from '../models/list';

export interface IListService {
  createList(list: List): List;
  getList(): List;
  getListVerbose(): List;
  updateList(title: string): List;
  delete(): List;
}