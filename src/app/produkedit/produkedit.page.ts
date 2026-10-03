import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-produkedit',
  templateUrl: './produkedit.page.html',
  styleUrls: ['./produkedit.page.scss'],
  standalone: false,
})
export class ProdukeditPage implements OnInit {
  //Variabel form edit
  editNama: string = '';
  editGambar: string = '';
  editKategori: string = '';
  editHargaBeli: number = 0;
  editHargaJual: number = 0;
  editStok: number = 0;
  editDeskripsi: string = '';
  editId: number = 0;

  public alertButtons = [{
    text: 'OK',
    handler: () => {
      this.router.navigate(['/produk']);
    }
  }];

  //Getter untuk pengecekan validasi
  get namaValid(): boolean {
    return this.editNama.length >= 3;
  }
  get kategoriValid(): boolean {
    return this.editKategori.length > 0;
  }
  get hargaBeliValid(): boolean {
    return this.editHargaBeli > 0;
  }
  get hargaJualValid(): boolean {
    return this.editHargaJual > 0;
  }
  get stokValid(): boolean {
    return this.editStok >= 0;
  }
  get deskripsiValid(): boolean {
    return this.editDeskripsi.length > 0;
  }
  get formValid(): boolean {
    return this.namaValid && this.kategoriValid && this.hargaBeliValid
      && this.hargaJualValid && this.stokValid && this.deskripsiValid;
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //parameter :id dari URL
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editId = Number(params['id']);
        const product = this.productService.produkId(this.editId);
        if (product) {
          //Isi form dengan data produk yang sudah ada
          this.editNama = product.name;
          this.editGambar = product.image;
          this.editKategori = product.category;
          this.editHargaBeli = product.buyPrice;
          this.editHargaJual = product.sellPrice;
          this.editStok = product.stock;
          this.editDeskripsi = product.description;
        }
      }
    });
  }

  // Method update 
  updateProduk() {
    this.productService.updateProduk(this.editId, this.editNama, this.editGambar, this.editKategori, this.editHargaBeli, this.editHargaJual, this.editStok, this.editDeskripsi);
  }
}
