import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HideAndShowComponent } from './custom-components/hide-and-show/hide-and-show.component';
import { LoginComponent } from './custom-components/login/login.component';
import { RegisterComponent } from './custom-components/register/register.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'full-dashboard',
    loadChildren: () => import('./custom-components/full-dashboard/full-dashboard.module').then(m => m.FullDashboardModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent-folder/parent-folder.module').then(m => m.ParentFolderModule)
  },
  {
    path: 'hide-and-show',
    component: HideAndShowComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
