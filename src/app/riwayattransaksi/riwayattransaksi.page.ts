import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../services/transaction';

@Component({
  selector: 'app-riwayattransaksi',
  templateUrl: './riwayattransaksi.page.html',
  styleUrls: ['./riwayattransaksi.page.scss'],
  standalone: false,
})
export class RiwayattransaksiPage implements OnInit {
  transactions: Transaction[] = [];
  selectedTx: Transaction | null = null;

  constructor(
    private txService: TransactionService
  ) { }

  ngOnInit() { 
    this.transactions = this.txService.getTransactions();
  }

  // Tombol Refresh murni menarik data ulang
  refreshData() {
    this.transactions = this.txService.getTransactions();
  }

  showDetail(tx: Transaction) {
    this.selectedTx = this.selectedTx?.id === tx.id ? null : tx;
  }
}