import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukdetailPage } from './produkdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukdetailPageRoutingModule {}
