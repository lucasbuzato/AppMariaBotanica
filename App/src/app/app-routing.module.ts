import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'paginatemp',
    loadChildren: () => import('./paginatemp/paginatemp.module').then( m => m.PaginatempPageModule)
  },
  {
    path: 'paginacha',
    loadChildren: () => import('./paginacha/paginacha.module').then( m => m.PaginachaPageModule)
  },
  {
    path: 'paginamuda',
    loadChildren: () => import('./paginamuda/paginamuda.module').then( m => m.PaginamudaPageModule)
  },
  {
    path: 'plantapag',
    loadChildren: () => import('./plantapag/plantapag.module').then( m => m.PlantapagPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
