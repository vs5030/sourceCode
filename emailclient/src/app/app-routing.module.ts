import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'inbox',
    canMatch: [authGuard],
    loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule)
  },
  {
    path: 'inbox',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
