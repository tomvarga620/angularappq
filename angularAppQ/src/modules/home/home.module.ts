import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { QListComponent } from './q-list/q-list.component';

@NgModule({
  declarations: [QListComponent],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
