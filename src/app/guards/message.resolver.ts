import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({ providedIn: 'root' })
export class MessageResolver implements Resolve<string> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string>{
    return of("Resolve funcionando");

  }
}
