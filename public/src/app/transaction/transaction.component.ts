import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shintocoins.service'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  private shintoService = ShintoService.shared

  constructor() { }

  ngOnInit() {
  }

}
