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
import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './common/card/card.component';
import { DataviewComponent } from './dataview/dataview.component';
import { ProductService } from './dataview/product.service';
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { CustomerService } from './table/customer.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MapComponent,
    CarouselComponent,
    WelcomeComponent,
    CardComponent,
    DataviewComponent,
    TimelineComponent,
    FooterComponent,
    TableComponent,
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
    TimelineModule,
    TableModule,
    ContextMenuModule,
    ProgressBarModule,
    SliderModule,
    MultiSelectModule,
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
