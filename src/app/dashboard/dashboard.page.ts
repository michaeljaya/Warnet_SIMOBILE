import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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

  constructor(
    private productService: ProductService,
    private txService: TransactionService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadData();
  }
  //untuk refresh data
  async refreshData() {
    this.loadData();
    const toast = await this.toastController.create({
      message: 'Data Dashboard berhasil dimuat ulang!',
      duration: 1500,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }

  loadData() {
    //ambil total produk
    this.totalProducts = this.productService.ambilProduk().length;
    
    //abil total transaksi dan pendapatan
    this.totalTransaksiHariIni = this.txService.getTodayTransactions().length;
    this.totalPendapatanHariIni = this.txService.getTodayTotal();

    //cari Produk Terlaris
    const semuaTransaksi = this.txService.getTransactions();
    
    if (semuaTransaksi.length === 0) {
      this.bestSeller = 'Belum ada transaksi';
    } else {
      let namaTerlaris = '';
      let jumlahTerbanyak = 0;

      const semuaProduk = this.productService.ambilProduk();

      for (let p = 0; p < semuaProduk.length; p++) {
        const produkSekarang = semuaProduk[p];
        let totalTerjualProdukIni = 0;
        
        for (let t = 0; t < semuaTransaksi.length; t++) {
          const transaksi = semuaTransaksi[t];
          
          for (let i = 0; i < transaksi.items.length; i++) {
            const itemBeli = transaksi.items[i];
            
            if (itemBeli.product.id === produkSekarang.id) {
              totalTerjualProdukIni = totalTerjualProdukIni + itemBeli.quantity;
            }
          }
        }

        if (totalTerjualProdukIni > jumlahTerbanyak) {
          jumlahTerbanyak = totalTerjualProdukIni;
          namaTerlaris = produkSekarang.name;
        }
      }

      //Tampilkan hasil
      if (jumlahTerbanyak > 0) {
        this.bestSeller = namaTerlaris;
      } else {
        this.bestSeller = 'Belum ada transaksi';
      }
    }
  }
}