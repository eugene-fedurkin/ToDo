import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IItemService } from '../../services';
import { Item } from '../../models';

@Component({
    selector: 'list',
    template: require('./list.c.html'),
    styles: [require('./list.c.css')]
})
export class List implements OnDestroy {
    public listId: number;
    private title: string;
    private subscription: Subscription;
    constructor(private activatedRoute: ActivatedRoute,
        private iItemService: IItemService) {
        this.subscription = activatedRoute.params.subscribe(params => this.listId = params['listId']);
   }

   private create() {
    let item = new Item();
    item.title = this.title;
    item.description = '';
    item.listId = this.listId;
    this.iItemService.createItem(item);
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
   }
}