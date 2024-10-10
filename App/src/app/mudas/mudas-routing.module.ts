import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular';

import { MudasPage } from './mudas.page';

const routes: Routes = [
  {
    path: '',
    component: MudasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MudasPageRoutingModule {}
