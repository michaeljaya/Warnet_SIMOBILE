import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukformPage } from './produkform.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukformPageRoutingModule {}
