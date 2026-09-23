import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from '../services/cart';
import { Transaction } from '../services/transaction'; 

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  constructor(
    public cartService: CartService, 
    public transactionService: Transaction,
    private alertController: AlertController,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cdr.detectChanges(); 
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