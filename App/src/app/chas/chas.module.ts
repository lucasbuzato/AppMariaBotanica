import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChasPageRoutingModule } from './chas-routing.module';

import { ChasPage } from './chas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChasPageRoutingModule
  ],
  declarations: [ChasPage]
})
export class ChasPageModule {}
