import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormClientModule} from "./form-client/form-client.module";
import {ClientModule} from "./client/client.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from 'ngx-mask'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./guards/auth.interceptor";
import {CookieModule} from "ngx-cookie";
import {TesteModule} from "./teste/teste.module";
import {UnauthenticatedFormGuard} from "./guards/unauthenticated-form.guard";
import {FormAuthenticatedGuard} from "./guards/form-authenticated.guard";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormClientModule,
    ClientModule,
    TesteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    CookieModule.withOptions(),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
  UnauthenticatedFormGuard,
  FormAuthenticatedGuard],
bootstrap: [AppComponent]
})

export class AppModule {
}
