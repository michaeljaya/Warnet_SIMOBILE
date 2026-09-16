import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukPage } from './produk.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukPageRoutingModule {}
