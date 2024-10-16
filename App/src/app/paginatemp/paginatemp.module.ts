import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginatempPageRoutingModule } from './paginatemp-routing.module';

import { PaginatempPage } from './paginatemp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginatempPageRoutingModule
  ],
  declarations: [PaginatempPage]
})
export class PaginatempPageModule {}
