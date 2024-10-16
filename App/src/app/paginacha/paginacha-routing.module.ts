import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginachaPage } from './paginacha.page';

const routes: Routes = [
  {
    path: '',
    component: PaginachaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginachaPageRoutingModule {}
