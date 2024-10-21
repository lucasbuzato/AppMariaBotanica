import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantapagPageRoutingModule } from './plantapag-routing.module';

import { PlantapagPage } from './plantapag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantapagPageRoutingModule
  ],
  declarations: [PlantapagPage]
})
export class PlantapagPageModule {}
