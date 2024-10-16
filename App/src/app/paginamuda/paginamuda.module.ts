import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginamudaPageRoutingModule } from './paginamuda-routing.module';

import { PaginamudaPage } from './paginamuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginamudaPageRoutingModule
  ],
  declarations: [PaginamudaPage]
})
export class PaginamudaPageModule {}
