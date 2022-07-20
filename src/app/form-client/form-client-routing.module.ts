import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogadoComponent} from "./components/logado/logado.component";
import {MessageResolver} from "../guards/message.resolver";

const routes: Routes = [
  {
    path: 'logado',
    component: LogadoComponent,
    resolve: {
      messageResolver: MessageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormClientRoutingModule { }
