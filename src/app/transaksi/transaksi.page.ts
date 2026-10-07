import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService } from '../services/cart';
import { TransactionService } from '../services/transaction';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  constructor(
    public cartService: CartService, 
    public transactionService: TransactionService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  async prosesCheckout() {
    const keranjang = this.cartService.getCart();
    if (keranjang.length === 0) {
      const alertKosong = await this.alertController.create({
        header: 'Keranjang Kosong',
        message: 'Anda belum menambahkan produk apapun ke keranjang.',
        buttons: ['Mengerti']
      });
      await alertKosong.present();
      return; 
    }

    const alertKonfirmasi = await this.alertController.create({
      header: 'Konfirmasi Pesanan',
      message: 'Apakah Anda yakin ingin memproses transaksi ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Konfirmasi',
          handler: async () => {
            
            this.transactionService.addTransaction(keranjang, this.cartService.getTotal());
            this.cartService.clearCart();

            const alertSukses = await this.alertController.create({
              header: 'Berhasil',
              message: 'Checkout berhasil! Transaksi tersimpan di Riwayat Transaksi.',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    this.router.navigate(['/riwayattransaksi']);
                  }
                }
              ]
            });
            await alertSukses.present();

          }
        }
      ]
    });
    await alertKonfirmasi.present();
  }

  async refreshData() {
    const alert = await this.alertController.create({
      header: 'Berhasil',
      message: 'Keranjang belanja berhasil diperbarui!',
      buttons: ['OK']
    });
    await alert.present();
  }

  hapusItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  tambahQty(product: any) {
    if (product.stock > 0) {
      this.cartService.tambahKeranjang(product);
    }
  }

  kurangiQty(product: any) {
    const keranjang = this.cartService.getCart();
    for (let i = 0; i < keranjang.length; i++) {
      const item = keranjang[i];
      if (item.product.id === product.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          product.stock += 1;
        } else {
          this.cartService.removeFromCart(product.id);
        }
        break; 
      }
    }
  }
}