import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperosPage } from './temperos.page';

const routes: Routes = [
  {
    path: '',
    component: TemperosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperosPageRoutingModule {}
