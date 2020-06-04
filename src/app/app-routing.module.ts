import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'test', pathMatch: 'full'},
    {path: 'test', component: TestComponent},
    {path: 'crud', loadChildren: () => import('src/app/crud/crud.module').then(m => m.CrudModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}