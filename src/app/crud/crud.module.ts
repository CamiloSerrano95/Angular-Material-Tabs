import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CrudRoutingModule } from './crud-routing.module';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
