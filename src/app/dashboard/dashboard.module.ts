import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
