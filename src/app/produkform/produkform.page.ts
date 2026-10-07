import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-produkform',
  templateUrl: './produkform.page.html',
  styleUrls: ['./produkform.page.scss'],
  standalone: false,
})
export class ProdukformPage implements OnInit {
  //Variabel
  nama: string = '';
  gambar: string = '';
  kategori: string = '';
  hargaBeli: number = 0;
  hargaJual: number = 0;
  stok: number = 0;
  deskripsi: string = '';

  public alertButtons = [{
    text: 'OK',
    handler: () => {
      this.router.navigate(['/produk']);
    }
  }];

  //Getter untuk validasi
  get namaValid(): boolean {
    return this.nama.length >= 3;
  }
  get kategoriValid(): boolean {
    return this.kategori.length > 0;
  }
  get hargaBeliValid(): boolean {
    return this.hargaBeli > 0;
  }
  get hargaJualValid(): boolean {
    return this.hargaJual > 0;
  }
  get stokValid(): boolean {
    return this.stok >= 0;
  }
  get deskripsiValid(): boolean {
    return this.deskripsi.length > 0;
  }
  get formValid(): boolean {
    return this.namaValid && this.kategoriValid && this.hargaBeliValid
      && this.hargaJualValid && this.stokValid && this.deskripsiValid;
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() { }

  // Method simpan
  simpanProduk() {
    this.productService.tambahProduk(this.nama, this.gambar, this.kategori,
      Number(this.hargaBeli), Number(this.hargaJual), Number(this.stok), this.deskripsi);

    this.resetForm();
  }

  resetForm() {
    this.nama = '';
    this.gambar = '';
    this.kategori = '';
    this.hargaBeli = 0;
    this.hargaJual = 0;
    this.stok = 0;
    this.deskripsi = '';
  }
}
