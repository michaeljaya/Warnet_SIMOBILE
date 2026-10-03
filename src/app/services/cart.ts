import { Service } from '@angular/core';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Service()
export class CartService {

  //Array keranjang belanja
  cart: CartItem[] = [];

  //Ambil semua item di keranjang
  getCart(): CartItem[] {
    return this.cart;
  }

  //tambah produk ke keranjang
  tambahKeranjang(product: Product) {
    let sudahAda = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product.id === product.id) {
        this.cart[i].quantity += 1;
        sudahAda = true;
        break;
      }
    }

    if (sudahAda === false) {
      this.cart.push({ product: product, quantity: 1 });
    }

    product.stock -= 1;
  }

  //hapus item dari keranjang dan kembalikan stok
  removeFromCart(productId: number) {
    let indexYangDihapus = -1;

    //Cari index barang yang mau dihapus
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].product.id === productId) {
        //Kembalikan stoknya
        this.cart[i].product.stock += this.cart[i].quantity;
        indexYangDihapus = i;
        break;
      }
    }
    if (indexYangDihapus !== -1) {
      this.cart.splice(indexYangDihapus, 1);
    }
  }

  //hitung total harga seluruh keranjang
  getTotal(): number {
    let totalHarga = 0;

    for (let i = 0; i < this.cart.length; i++) {
      const item = this.cart[i];
      totalHarga = totalHarga + (item.product.sellPrice * item.quantity);
    }

    return totalHarga;
  }

  //kosongkan keranjang setelah checkout
  clearCart() {
    this.cart.length = 0;
  }
}