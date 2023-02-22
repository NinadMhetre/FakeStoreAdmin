import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatButtonModule} from '@angular/material/button';

import { ProductSetupRoutingModule } from './product-setup-routing.module';
import { ProductMasterComponent } from './product-master/product-master.component';
import { ProductMasterDetailsComponent } from './product-master/product-master-details/product-master-details.component';


@NgModule({
  declarations: [
    ProductMasterComponent,
    ProductMasterDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductSetupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class ProductSetupModule { }
