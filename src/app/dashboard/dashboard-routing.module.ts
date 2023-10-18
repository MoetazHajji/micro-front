import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path:'',component:ProductComponent},
  {
    path:'product',component:AdminLayoutComponent,
    children: [{
      path:'',component:ProductComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
