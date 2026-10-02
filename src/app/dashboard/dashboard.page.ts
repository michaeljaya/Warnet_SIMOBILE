import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { TransactionService } from '../services/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  totalProducts = 0;
  totalTransaksiHariIni = 0;
  totalPendapatanHariIni = 0;
  bestSeller = '-';
  isRefreshing = false;

  constructor(
    private productService: ProductService,
    private txService: TransactionService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  refreshData() {
    this.isRefreshing = true;
    this.loadData(); 
    
    setTimeout(() => {
      this.isRefreshing = false;
    }, 800);
  }

  loadData() {
    this.totalProducts = this.productService.ambilProduk().length;
    this.totalTransaksiHariIni = this.txService.getTodayTransactions().length;
    this.totalPendapatanHariIni = this.txService.getTodayTotal();

    const allTx = this.txService.getTransactions();
    if (allTx.length > 0) {
      const countMap: { [key: string]: number } = {};
      allTx.forEach(tx => {
        tx.items.forEach(item => {
          countMap[item.product.name] = (countMap[item.product.name] || 0) + item.quantity;
        });
      });
      this.bestSeller = Object.entries(countMap).sort((a, b) => b[1] - a[1])[0][0];
    } else {
      this.bestSeller = 'Belum ada transaksi';
    }
  }
}