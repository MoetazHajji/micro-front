import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {ProductComponent} from "./product/product.component";
import { SampleComponent } from './sample/sample.component';
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path:'',component:ProductComponent},
  {
    path:'product',component:AdminLayoutComponent,
    children: [{
      path:'',component:ProductComponent
    }]
  },
  {
    path:'sample',component:AdminLayoutComponent,
    children: [{
      path:'',component:SampleComponent
    }]
  },
  {
    path:'test',component:AdminLayoutComponent,
    children: [{
      path:'',component:TestComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
