import { Injectable, EventEmitter} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Stock } from './stock';

@Injectable()
export class StockService {
  stocksChanged = new EventEmitter<Stock[]>();
// name, description and path

  private stocks: Stock[] = [
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(1).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(2).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(3).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(4).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(5).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(6).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(7).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(8).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(9).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(10).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(11).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(12).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(13).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(14).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(15).png'
            ),
    new Stock('Name of Stock',
              'Afro Candy dives in a deep blue sea',
              './assets/stocks/stock(16).png'
            ),
  ];

  constructor(private http: Http) { }

  getStocks() {
    return this.stocks;
  }

  getStock(id: number) {
    return this.stocks[id];
  }

}
