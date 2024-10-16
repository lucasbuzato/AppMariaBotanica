import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginatempPage } from './paginatemp.page';

const routes: Routes = [
  {
    path: '',
    component: PaginatempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginatempPageRoutingModule {}
