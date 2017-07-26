import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routingConfig } from './routes';
import { UserServicesMock, ItemServiceMock, ListServicesMock } from './services/';
import { AppComponent, ToDo } from './components';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routingConfig],
    declarations: [AppComponent, ToDo],
    providers: [UserServicesMock, ItemServiceMock, ListServicesMock],
    bootstrap: [AppComponent]
})
export class AppModule {}