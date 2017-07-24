import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routingConfig } from './routes';
import { AppComponent } from './components';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routingConfig],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}