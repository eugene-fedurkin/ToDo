import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Item as ItemModel } from '../../models';
import { IItemService } from '../../services/i.item.service';


@Component({
    selector: 'item',
    template: require('./item.c.html'),
    styles: [require('./item.c.css')]
})
export class Item implements OnDestroy {
    private subscription: Subscription;
    private itemId: number;
    private item: ItemModel;
    
    constructor(private iItemService: IItemService, private activatedRoute: ActivatedRoute) {
        this.subscription = activatedRoute.params.subscribe(params => this.loadItem(params));
   }

   private loadItem(params: any) {
    this.itemId = +params['itemId'];
    this.iItemService.getItem(this.itemId).then(r => this.item = r);
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
   }
}