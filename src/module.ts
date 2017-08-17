import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routingConfig } from './routes';
import { IItemService, IListService, IUserService, UserServicesMock, ItemServiceMock, ListServicesMock } from './services';
import { Store } from './store/store';
import { AppComponent, Register, ItemExample, ListExample, SignUp } from './components';
import { UserHttpService, ListHttpService, ItemHttpService } from './services/http';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routingConfig ],
    declarations: [AppComponent, Register, ItemExample, ListExample, SignUp],
    providers: [Store,
        {provide: IUserService, useClass: UserHttpService},
        {provide: IListService, useClass: ListHttpService},
        {provide: IItemService, useClass: ItemHttpService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}