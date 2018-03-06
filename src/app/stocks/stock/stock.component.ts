import { Component, Input } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  @Input() stock: Stock;
  @Input() stockID: number;

}
