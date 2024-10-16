import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginachaPageRoutingModule } from './paginacha-routing.module';

import { PaginachaPage } from './paginacha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginachaPageRoutingModule
  ],
  declarations: [PaginachaPage]
})
export class PaginachaPageModule {}
