import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukeditPage } from './produkedit.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukeditPageRoutingModule {}
