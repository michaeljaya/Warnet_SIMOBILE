import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/product';
import { CartService } from '../services/cart';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  //two way binding
  cariProduk: string = '';
  kategoriDipilih: string = 'Semua'
  semuaProduk: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService,  private toastController: ToastController ) { }

  ngOnInit() {
    this.semuaProduk = this.productService.ambilProduk();
  }

  //Refresh data setiap kali halaman ditampilkan
  refreshData() {
    this.semuaProduk = this.productService.ambilProduk();
  }

  //Setiap kali user mengetik, daftar langsung berubah
  get filterProduk(): Product[] {
    let filter = this.semuaProduk;

    if (this.kategoriDipilih !== 'Semua') {
      filter = filter.filter(p => p.category === this.kategoriDipilih);
    }

    //Filter Pencarian (Nama Barang)
    if (this.cariProduk) {
      filter = filter.filter(p =>
        p.name.toLowerCase().includes(this.cariProduk.toLowerCase())
      );
    }

    return filter;
  }

  //ChunkArray untuk memecah array 1D menjadi array 2D
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  //Method hapus produk 
  deleteProduct(id: number) {
    this.productService.hapusProduk(id);
    this.semuaProduk = this.productService.ambilProduk();
  }

  async tambahKeKeranjang(product: Product) {
    if (product.stock > 0) {
      this.cartService.tambahKeranjang(product);
    }

    // --- KODE ANIMASI TOAST TAMBAHAN ANDA ---
      const toast = await this.toastController.create({
        message: product.name + ' berhasil ditambahkan!',
        duration: 1500, // muncul selama 1.5 detik
        position: 'top', // muncul meluncur dari atas
        color: 'success',
        animated: true // Memastikan efek animasinya aktif (Syarat UTS)
      });
      await toast.present();
      // ----------------------------------------
    }
  

  //Mengambil jumlah produk ini di dalam keranjang
  dapatkanQtyKeranjang(product: Product): number {
    const item = this.cartService.getCart().find(c => c.product.id === product.id);
    return item ? item.quantity : 0;
  }
  //Mengurangi jumlah di keranjang
  kurangiQtyKeranjang(product: Product) {
    const item = this.cartService.getCart().find(c => c.product.id === product.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        product.stock += 1; // Kembalikan 1 stok
      } else {
        this.cartService.removeFromCart(product.id);
      }
    }
  }
}
