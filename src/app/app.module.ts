import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppHtmlModule} from "../app-html/app-html.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppHtmlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
