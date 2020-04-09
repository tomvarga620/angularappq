import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQRoutingModule } from './add-q-routing.module';
import { AddQComponent } from './add-q/add-q.component';

@NgModule({
  declarations: [AddQComponent],
  imports: [
    AddQRoutingModule,
    CommonModule
  ]
})
export class AddQModule { }
