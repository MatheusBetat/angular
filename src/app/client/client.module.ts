import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client/client.component';
import { AdressComponent } from './components/adress/adress.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgxMaskModule} from "ngx-mask";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormComponent} from "./form/form.component";


@NgModule({
  declarations: [
    FormComponent,
    ClientComponent,
    AdressComponent
  ],
  exports: [
    FormComponent,
    ClientComponent,
    AdressComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule,
    MatRadioModule,
    MatDatepickerModule
  ]
})
export class ClientModule { }
