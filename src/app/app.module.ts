import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { GMapModule } from 'primeng/gmap';
import { AppComponent } from './app.component';
import { SocialNavComponent } from './social-nav/social-nav.component';
import { NavComponent } from './nav/nav.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { MapComponent } from './map/map.component';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SocialNavComponent,
    NavComponent,
    SearchNavComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    GMapModule,
    ToastModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
