import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChasPage } from './chas.page';

const routes: Routes = [
  {
    path: '',
    component: ChasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChasPageRoutingModule {}
