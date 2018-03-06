import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { StockService } from './stocks/stock.service';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { JoinComponent } from './join/join.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockComponent } from './stocks/stock/stock.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    JoinComponent,
    HeaderComponent,
    FooterComponent,
    PhotosComponent,
    StocksComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ParticlesModule,
    NoopAnimationsModule,
    MatInputModule,
    MatStepperModule,
    // Angular2ImageGalleryModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { STOCK_ROUTES } from '../app/stocks/stocks.routes';
