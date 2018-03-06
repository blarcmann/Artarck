import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MaterialModule } from '../../modules/material.module';


import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  moduleId: module.id,
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit, OnDestroy {
    // step = 0;
  selectedStock: Stock;
  private stockIndex: number;
  private subscription: Subscription;

  constructor (private router: Router,
               private route: ActivatedRoute,
              private stocksService: StockService) {}


    ngOnInit() {
        this.subscription = this.route.params.subscribe(
          (params: any) => {
            this.stockIndex = params['id'];
            this.selectedStock = this.stocksService.getStock(this.stockIndex);
          }
        );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

}
