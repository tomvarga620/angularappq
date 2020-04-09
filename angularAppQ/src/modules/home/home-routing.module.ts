import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QListComponent } from './q-list/q-list.component';

const routes: Routes = [
  {path: '', component: QListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
