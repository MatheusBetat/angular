import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormClientRoutingModule } from './form-client-routing.module';
import { FormComponent } from '../client/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaskModule} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";
import { LogadoComponent } from './components/logado/logado.component';
import {FormAuthenticatedGuard} from "../guards/form-authenticated.guard";
import {ClientModule} from "../client/client.module";


@NgModule({
  declarations: [
    LogadoComponent
  ],
  exports: [
    LogadoComponent
  ],
  imports: [
    CommonModule,
    FormClientRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgxMaskModule,
    MatIconModule,
    ClientModule
  ],
  providers: [FormAuthenticatedGuard, FormComponent]
})
export class FormClientModule { }
