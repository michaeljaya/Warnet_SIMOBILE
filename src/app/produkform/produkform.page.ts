import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-produkform',
  templateUrl: './produkform.page.html',
  styleUrls: ['./produkform.page.scss'],
  standalone: false,
})
export class ProdukformPage implements OnInit {
  productForm: FormGroup;
  isEdit = false;
  editId: number = 0;

  alertButtons = [{
    text: 'OK',
    handler: () => {
      this.router.navigate(['/produk']);
    }
  }];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      buyPrice: [0, [Validators.required, Validators.min(0)]],
      sellPrice: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    // cek apakah ada paramter id 
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.editId = Number(params['id']);
        // Ambil data produk yang mau kita edit lalu isi form nya
        const product = this.productService.produkId(this.editId);
        if (product) {
          this.productForm.patchValue({
            name: product.name,
            category: product.category,
            buyPrice: product.buyPrice,
            sellPrice: product.sellPrice,
            stock: product.stock,
            description: product.description,
          });
        }
      }
    });
  }

  save() {
    if (this.productForm.valid) {
      const v = this.productForm.value;
      // Hanya jalankan logika update produk
      if (this.isEdit) {
        //update produk 
        this.productService.updateProduk(this.editId, v.name, v.category, v.buyPrice, v.sellPrice, v.stock, v.description);
      } else {
        //tambah produk
        this.productService.tambahProduk(v.name, v.category, v.buyPrice, v.sellPrice, v.stock, v.description);
      }
    }
  }

}

