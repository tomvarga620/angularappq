import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQComponent } from './add-q/add-q.component';

const routes: Routes = [
  {path: '', component: AddQComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddQRoutingModule { }
