import { Component, OnDestroy } from '@angular/core';
import { IItemService } from '../../services/i.item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'items',
  template: require('./items.c.html'),
  styles: [require('./items.c.css')]
})
export class Items implements OnDestroy {
  
  private items: Item[];
  private subscription: Subscription;
  private listId: number;

  constructor(private iItemService: IItemService,
      private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(params => this.loadItems(params));
  }

  public loadItems(params: any) {
    this.listId = +params['listId'];
    this.iItemService.getItemsInList(this.listId).then(r => this.items = r);
  }




  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

  // private create() {
  //   let item = new Item();
  //   item.title = this.title;
  //   item.listId = this.listId;
  //   item.description = '';
  //   this.iItemService.createItem(item);
  // }

  // private getItem() {
  //   this.iItemService.getItem(this.id).then(i => console.log(i));
  // }
  
  // private update() {
  //   let item = new Item();
  //   item.id = this.id;
  //   item.title = this.title;
  //   item.listId = this.listId;
  //   item.description = '';
  //   this.iItemService.updateItem(this.id, item);// id~
  // }
}