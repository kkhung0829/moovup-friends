import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'friend-list',
    loadChildren: () => import('./pages/friend-list/friend-list.module').then( m => m.FriendListPageModule)
  },
  {
    path: '',
    redirectTo: 'friend-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
