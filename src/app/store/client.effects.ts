import {ClientActionTypes, LogIn, LogInSuccess, LogInFailure, LogOut,} from '../store/client.actions';
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {CookieService} from "ngx-cookie";
@Injectable()
export class ClientEffects {

  constructor(
    private actions: Actions,  private router: Router, private cookie: CookieService)
  {}


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.LOGIN_SUCCESS),
    tap(() => {
      this.cookie.put('clientId', '123456');
      this.router.navigate(['/logado']);
    })
  );

 /* logIn$ = createEffect(() =>
  this.actions.pipe(ofType(ClientActionTypes.LOGIN),
    tap(() => )
  )
  )*/
}

/*
goToRegisterCovenant$ = createEffect(
  () => this.actions$.pipe(
    ofType(RouteAction.goToRegisterCovenant),
    tap((props) => window.location.href = `/covenant`)),
  {dispatch: false}
);*/
