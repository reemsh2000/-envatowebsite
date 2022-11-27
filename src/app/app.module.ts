import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';

import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './common/card/card.component';
import { DataviewComponent } from './dataview/dataview.component';
import { ProductService } from './dataview/product.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    CarouselComponent,
    WelcomeComponent,
    CardComponent,
    DataviewComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ButtonModule,
    GMapModule,
    ToastModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    CardModule,
    DataViewModule,
    InputTextModule,
    PanelModule,
    RatingModule,
    DropdownModule,
    RippleModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
