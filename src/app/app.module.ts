import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import {FormsModule} from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    GMapModule,
    ToastModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
