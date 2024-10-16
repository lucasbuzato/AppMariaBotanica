import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginamudaPage } from './paginamuda.page';

const routes: Routes = [
  {
    path: '',
    component: PaginamudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginamudaPageRoutingModule {}
