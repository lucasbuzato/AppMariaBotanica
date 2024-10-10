import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MudasPageRoutingModule } from './mudas-routing.module';

import { MudasPage } from './mudas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MudasPageRoutingModule
  ],
  declarations: [MudasPage]
})
export class MudasPageModule {}
