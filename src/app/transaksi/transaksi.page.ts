import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// Memanggil service buatan teman Anda
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
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  // Fungsi Event Binding untuk menghapus item (menggunakan fungsi teman Anda)
  hapusItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

   // Fungsi untuk tombol PLUS (+) di keranjang
  tambahQty(product: any) {
    if (product.stock > 0) {
      this.cartService.tambahKeranjang(product);
    }
  }
  // Fungsi untuk tombol MINUS (-) di keranjang
  kurangiQty(product: any) {
    const item = this.cartService.getCart().find(c => c.product.id === product.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        product.stock += 1; // Kembalikan 1 stok ke etalase toko
      } else {
        // Jika sisa 1 dan diklik minus, otomatis terhapus dari keranjang
        this.cartService.removeFromCart(product.id);
      }
    }
  }
  // --------------------------------------------------

  // Fungsi Event Binding untuk tombol Konfirmasi Checkout
  async checkout() {
    // if (this.cartService.cart.length === 0) return;

    // const totalBelanja = this.cartService.getTotal();
    
    // TUGAS TEMAN ANDA: 
    // Karena Anda tidak boleh mengubah file teman Anda, ingatkan teman Anda 
    // untuk membuat fungsi simpan riwayat di dalam file 'transaction.ts'-nya.
    // Nanti fungsinya tinggal dipanggil di sini, misalnya: 
    // this.transactionService.simpanRiwayat(this.cartService.cart, totalBelanja);

    // Kosongkan keranjang (menggunakan fungsi bawaan dari cart.ts teman Anda)
    // this.cartService.clearCart();

    // // Munculkan notifikasi sukses
    // const alert = await this.alertController.create({
    //   header: 'Sukses',
    //   message: 'Transaksi sebesar Rp ' + totalBelanja + ' berhasil dikonfirmasi!',
    //   buttons: ['OK']
    // });
    // await alert.present();
  }
}