import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-stock-upload',
  templateUrl: './stock-upload.component.html',
  styleUrls: ['./stock-upload.component.css']
})
export class StockUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
