import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ColorTravelHeaderComponent} from './color-travel-header/color-travel-header.component';
import {MenuItemComponent} from './color-travel-header/menu-item/menu-item.component';
import {ContentContainerComponent} from './content-container/content-container.component';
import {GalleryComponent} from './content-container/gallery/gallery.component';
import {HotelCardComponent} from './content-container/gallery/hotel-card/hotel-card.component';
import {GetHotelCardDataService} from './services/get-hotel-card-data';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ColorTravelHeaderComponent,
    MenuItemComponent,
    ContentContainerComponent,
    GalleryComponent,
    HotelCardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GetHotelCardDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
