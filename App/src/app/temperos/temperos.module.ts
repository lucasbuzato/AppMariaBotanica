import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperosPageRoutingModule } from './temperos-routing.module';

import { TemperosPage } from './temperos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperosPageRoutingModule
  ],
  declarations: [TemperosPage]
})
export class TemperosPageModule {}
