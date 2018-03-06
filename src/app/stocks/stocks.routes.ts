import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, ROUTER_CONFIGURATION} from '@angular/router';


import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks.component';


export const STOCK_ROUTES: Routes = [
    { path: '/:id', component: StockComponent },
    { path: '/:id/add', component: StocksComponent }
];
