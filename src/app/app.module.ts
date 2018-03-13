import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorTravelNewsComponent } from './color-travel-news/color-travel-news.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorTravelNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
