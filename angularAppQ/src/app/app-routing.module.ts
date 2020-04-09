import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('../modules/home/home.module').then(module => module.HomeModule)},
  { path: 'create', loadChildren: () => import('../modules/add-q/add-q.module').then(module => module.AddQModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
