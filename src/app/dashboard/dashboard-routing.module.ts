import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {VitrineComponent} from "../vitrine/vitrine.component";

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: '', component: VitrineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
