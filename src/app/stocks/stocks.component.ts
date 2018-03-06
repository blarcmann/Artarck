import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';
import { StockComponent } from './stock/stock.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  showFiller = false;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.stockService.stocksChanged.subscribe(
      (stocks: Stock[]) => this.stocks = stocks
    );
  }

}
