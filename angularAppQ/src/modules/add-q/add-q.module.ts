import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQRoutingModule } from './add-q-routing.module';
import { AddQComponent } from './add-q/add-q.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AddQComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AddQRoutingModule
  ]
})
export class AddQModule { }
