import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePgComponent} from './home-pg/home-pg.component'
import {HistoryComponent} from './history/history.component'
import {LoginComponent} from './login/login.component'
import {IndexComponent} from './index/index.component'
const routes: Routes = [
  {
    component:HomePgComponent,
    path:'home'
  },
  {
    component:HistoryComponent,
    path: 'history'
  },
  {
    component:LoginComponent,
    path: 'login'
  },
  {
    component:IndexComponent,
    path: 'index'
  },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }