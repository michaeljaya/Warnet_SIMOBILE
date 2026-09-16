import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProdukdetailPageRoutingModule } from './produkdetail-routing.module';

import { ProdukdetailPage } from './produkdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukdetailPageRoutingModule
  ],
  declarations: [ProdukdetailPage]
})
export class ProdukdetailPageModule {}
