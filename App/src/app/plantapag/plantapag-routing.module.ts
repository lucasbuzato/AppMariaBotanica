import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantapagPage } from './plantapag.page';

const routes: Routes = [
  {
    path: '',
    component: PlantapagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantapagPageRoutingModule {}
