import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('../carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
      },
      {
        path: 'chas',
        loadChildren: () => import('../chas/chas.module').then( m => m.ChasPageModule)
      },
      {
        path: 'mudas',
        loadChildren: () => import('../mudas/mudas.module').then( m => m.MudasPageModule)
      },
      {
        path: 'temperos',
        loadChildren: () => import('../temperos/temperos.module').then( m => m.TemperosPageModule)
      },
      {
        path: 'criarconta',
        loadChildren: () => import('../criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'paginatemp',
        loadChildren: () => import('../paginatemp/paginatemp.module').then( m => m.PaginatempPageModule)
      },
      {
        path: 'paginacha',
        loadChildren: () => import('../paginacha/paginacha.module').then( m => m.PaginachaPageModule)
      },
      {
        path: 'paginamuda',
        loadChildren: () => import('../paginamuda/paginamuda.module').then( m => m.PaginamudaPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
