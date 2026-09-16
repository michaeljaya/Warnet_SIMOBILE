import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProdukformPageRoutingModule } from './produkform-routing.module';

import { ProdukformPage } from './produkform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukformPageRoutingModule
  ],
  declarations: [ProdukformPage]
})
export class ProdukformPageModule {}
