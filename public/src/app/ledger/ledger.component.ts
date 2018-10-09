import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shintocoins.service'

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  private shintoService = ShintoService.shared

  constructor() { }

  ngOnInit() {
  }

}
