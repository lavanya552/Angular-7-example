import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeptListComponent} from './dept-list/dept-list.component';
import {EmpListComponent} from './emp-list/emp-list.component';
import {DeptDetailComponent} from './dept-detail/dept-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments', component:DeptListComponent},{path:'employees',component:EmpListComponent},
  {path:'departments/:id',component:DeptDetailComponent},
  {path:'**',component:PageNotFoundComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DeptListComponent,EmpListComponent,PageNotFoundComponent,DeptDetailComponent]