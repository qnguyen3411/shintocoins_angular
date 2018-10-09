import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shintocoins.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  private shintoService = ShintoService.shared
  coinsToBuy: string;

  constructor() { }

  ngOnInit() {
  }

  buy() {
    const coinAmt = Number(this.coinsToBuy);
    if (coinAmt != NaN) {
      this.shintoService.buy(coinAmt);
      this.coinsToBuy = "";
    }
  }
}
