import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {FormComponent} from "../client/form/form.component";
import {Observable} from "rxjs";

@Injectable()
export class UnauthenticatedFormGuard implements CanActivate {

  constructor(
    private formComponent: FormComponent,
    private router: Router,
  ) {
  }

  canActivate(){
    if (this.formComponent.logado) {
      this.router.navigate(['logado']);
      return false;
    }
    return true;
  }

}
