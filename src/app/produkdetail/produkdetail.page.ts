import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../services/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-produkdetail',
  templateUrl: './produkdetail.page.html',
  styleUrls: ['./produkdetail.page.scss'],
  standalone: false,
})
export class ProdukdetailPage implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.product = this.productService.produkId(id);
    });
  }

  tambahKeKeranjang() {
    if (this.product && this.product.stock > 0) {
      this.cartService.tambahKeranjang(this.product);
    }
  }

  dapatkanQtyKeranjang(): number {
    if (!this.product) return 0;
    const item = this.cartService.getCart().find(c => c.product.id === this.product!.id);
    return item ? item.quantity : 0;
  }

  kurangiQtyKeranjang() {
    if (!this.product) return;
    const item = this.cartService.getCart().find(c => c.product.id === this.product!.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.product.stock += 1; // Kembalikan 1 stok 
      } else {
        this.cartService.removeFromCart(this.product.id);
      }
    }
  }
}
