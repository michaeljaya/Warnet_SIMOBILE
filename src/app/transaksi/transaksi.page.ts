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

  ngOnInit() {
  }

  // Tombol Refresh murni Angular standar
  refreshData() {
    // Saat tombol diklik, Angular otomatis me-refresh tampilan keranjang
  }

  checkoutButtons = [
    { text: 'Batal', role: 'cancel' },
    {
      text: 'Konfirmasi',
      handler: () => {
        this.transactionService.addTransaction(this.cartService.cart, this.cartService.getTotal());
        this.cartService.clearCart();
        setTimeout(() => {
          this.router.navigate(['/riwayattransaksi']);
        }, 10);
      }
    }
  ];

  hapusItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  tambahQty(product: any) {
    if (product.stock > 0) {
      this.cartService.tambahKeranjang(product);
    }
  }

  kurangiQty(product: any) {
    const item = this.cartService.getCart().find(c => c.product.id === product.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        product.stock += 1;
      } else {
        this.cartService.removeFromCart(product.id);
      }
    }
  }

  async checkout() {
  }
}