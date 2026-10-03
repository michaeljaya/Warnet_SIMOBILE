import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ProdukeditPageRoutingModule } from './produkedit-routing.module';

import { ProdukeditPage } from './produkedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukeditPageRoutingModule
  ],
  declarations: [ProdukeditPage]
})
export class ProdukeditPageModule {}
