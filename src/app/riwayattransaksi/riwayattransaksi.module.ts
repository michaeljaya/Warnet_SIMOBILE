import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { RiwayattransaksiPageRoutingModule } from './riwayattransaksi-routing.module';

import { RiwayattransaksiPage } from './riwayattransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayattransaksiPageRoutingModule
  ],
  declarations: [RiwayattransaksiPage]
})
export class RiwayattransaksiPageModule {}
