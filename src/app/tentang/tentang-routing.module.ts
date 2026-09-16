import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TentangPage } from './tentang.page';

const routes: Routes = [
  {
    path: '',
    component: TentangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TentangPageRoutingModule {}
