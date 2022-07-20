import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormAuthenticatedGuard} from "./guards/form-authenticated.guard";
import {UnauthenticatedFormGuard} from "./guards/unauthenticated-form.guard";
import {LogadoComponent} from "./form-client/components/logado/logado.component";

const routes: Routes = [
  {
    path: 'logado',
    loadChildren: () => import('./form-client/form-client.module').then(module => module.FormClientModule),
    component: LogadoComponent,
    canActivate: [FormAuthenticatedGuard],
    canLoad: [FormAuthenticatedGuard],

  },
  {
    path: '',
    loadChildren: () => import('./client/client.module').then(module => module.ClientModule),
    canActivate: [UnauthenticatedFormGuard]

  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then(module => module.TesteModule)

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
