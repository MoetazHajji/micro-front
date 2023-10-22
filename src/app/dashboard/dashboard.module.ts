import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductComponent } from './product/product.component';
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { SampleComponent } from './sample/sample.component';
import { AddSampleComponent } from './sample/add-sample/add-sample.component';
import { EditSampleComponent } from './sample/edit-sample/edit-sample.component';
import { TestComponent } from './test/test.component';
import { AddTestComponent } from './test/add-test/add-test.component';
import { EditTestComponent } from './test/edit-test/edit-test.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    SampleComponent,
    AddSampleComponent,
    EditSampleComponent,
    TestComponent,
    AddTestComponent,
    EditTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    ToastModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    TagModule,
    ConfirmDialogModule,
    InputNumberModule,
    RadioButtonModule,
    DialogModule
  ]
})
export class DashboardModule {}
