import { Component, OnInit } from '@angular/core';
import { List } from '../../models';
import { IListService } from '../../services/i.list.service';

@Component({
  selector: 'list',
  template: require('./lists.c.html'),
  styles: [require('./lists.c.css')]
})
export class Lists implements OnInit {
  private title: string;
  public lists: List[];

  constructor(private iListService: IListService) {}
  public ngOnInit() {
    this.iListService.getListsVerbose().then(r => this.lists = r);
  }

  private create() {
    console.log(this.title)
    this.iListService.createList(this.title);
  }
  // private get() {
  //   this.iListService.getList(this.id).then(i => console.log(i));
  // }
  // private update() {
  //   this.iListService.updateList(this.id, this.title);
  // }
  // private delete() {
  //   this.iListService.delete(this.id);
  // }
}