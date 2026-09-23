// import { Service } from '@angular/core';

// @Service()
// export class Cart {
// }

//sementara
import { Service } from '@angular/core';
import { Product } from './product';  // Import interface Product


// Interface untuk item di keranjang (produk + jumlah beli)
export interface CartItem {
  product: Product;
  quantity: number;
}

@Service()
export class CartService {

  // Array keranjang belanja
  cart: CartItem[] = [];

  // Ambil semua item di keranjang
  getCart(): CartItem[] {
    return this.cart;
  }

  // Tambah produk ke keranjang
  // Jika produk sudah ada, tambah jumlahnya saja
  tambahKeranjang(product: Product) {
    const item = this.cart.find(c => c.product.id === product.id);
    if (item) {
      item.quantity += 1;  // Sudah ada, tambah quantity
    } else {
      this.cart.push({ product, quantity: 1 });  // Belum ada, buat baru
    }
    product.stock--;  // Kurangi stok produk
  }

  // Hapus item dari keranjang dan kembalikan stok
  removeFromCart(productId: number) {
    const item = this.cart.find(c => c.product.id === productId);
    if (item) {
      item.product.stock += item.quantity;  // Kembalikan stok
      this.cart = this.cart.filter(c => c.product.id !== productId);
    }
  }

  // Hitung total harga seluruh keranjang
  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.sellPrice * item.quantity), 0);
  }

  // Kosongkan keranjang setelah checkout
  clearCart() {
    this.cart = [];
  }
}
