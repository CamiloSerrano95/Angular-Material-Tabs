import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const crudRoutes: Routes = [
    {path: '', component: ListComponent}, 
    {path: 'manager', component: CreateComponent} 
];

@NgModule({
    imports: [RouterModule.forChild(crudRoutes)],
    exports: [RouterModule]
})

export class CrudRoutingModule {}