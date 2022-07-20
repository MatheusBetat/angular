import {Injectable} from '@angular/core';
import {CanActivate, Route, Router} from "@angular/router";
import {Observable} from 'rxjs';
import {FormComponent} from "../client/form/form.component";


@Injectable()
export class FormAuthenticatedGuard implements CanActivate {

  constructor(
    private formComponent: FormComponent,
    private router: Router) {
  }

  canActivate() {
    if (this.formComponent.logado) {
      return true;

    }
    this.router.navigate(['']).then(r => {
      console.log("Voltou para a pagina inicial")
    });
    return false;

  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: apenas usuario com cookie pode acessar rota /logado.', route);
    return true;

  }


}
