import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'select-level',
    loadChildren: () => import('./select-level/select-level.module').then( m => m.SelectLevelPageModule)
  },
  {
    path: 'level',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'level/:id',
    loadChildren: () => import('./level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'logo/:levelId/:logoId',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
