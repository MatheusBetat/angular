import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TesteRoutingModule} from './teste-routing.module';
import {TestComponent} from './test/test.component';
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule,
  ],
  exports: [
    TestComponent
  ],
  providers: [
    HttpClient
  ],

})
export class TesteModule { }
