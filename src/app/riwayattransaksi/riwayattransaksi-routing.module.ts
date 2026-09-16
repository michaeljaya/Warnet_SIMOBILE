import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayattransaksiPage } from './riwayattransaksi.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayattransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayattransaksiPageRoutingModule {}
