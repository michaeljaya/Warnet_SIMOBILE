import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProdukPageRoutingModule } from './produk-routing.module';

import { ProdukPage } from './produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukPageRoutingModule
  ],
  declarations: [ProdukPage]
})
export class ProdukPageModule {}
