import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shintocoins.service'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  private shintoService = ShintoService.shared
  coinsToSell: string;

  constructor() { }

  ngOnInit() {
  }

  sell() {
    const coinAmt = Number(this.coinsToSell);
    if (coinAmt != NaN) {
      this.shintoService.sell(coinAmt);
      this.coinsToSell = "";
    }
  }

}
