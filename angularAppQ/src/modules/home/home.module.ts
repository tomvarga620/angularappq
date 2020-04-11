import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { QListComponent } from './q-list/q-list.component';
import { QShowComponent } from './q-show/q-show.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [QListComponent, QShowComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
