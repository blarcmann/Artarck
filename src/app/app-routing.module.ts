import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { JoinComponent } from './join/join.component';
// import { PhotosComponent } from './photos/photos.component';
import { StocksComponent } from './stocks/stocks.component';


const appRoutes: Routes = [
    { path: 'home', component: AppComponent},
    { path: 'landing', component: LandingComponent},
    { path: 'join', component: JoinComponent},
    { path: 'stocks', component: StocksComponent},
    { path: '', redirectTo: '/landing', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
