import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";
import {Store} from "@ngrx/store";
import {AppState, selectClientState} from "../../store/client.state";
import {Observable, Subscription} from "rxjs";
import {LogIn} from "../../store/client.actions";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  client?: FormGroup;
  address?: FormGroup;
  getState?: Observable<any>;
  private subscription?: Subscription;


  constructor(private fb: FormBuilder, private router: Router, private cookie: CookieService, private store: Store<AppState>
              ) {
    this.getState = this.store.select(selectClientState);
  }

  ngOnInit() {
    this.subscription =
    this.getState?.subscribe(() =>
      console.log("seila")
    )
    }

  testAddress($event: any) {
    console.log("chegou adress", $event);
    this.address = $event;
  }

  testClient($event: any) {
    console.log("chegou cliente", $event)
    this.client = $event;
  }

  onSubmit(): void {

    if (this.client?.valid && this.address?.valid) {
      this.store.dispatch(new LogIn());
      /*this.cookie.put('clientId', '123456');
      this.router.navigate(['logado'])
      return alert("Client with id (" + this.cookie.get("clientId") + ") successfully logged in;.")*/

    } else {
      return alert("Invalid form.")
    }

  }
  get logado(): boolean {
    return this.cookie.hasKey('clientId');

  }
  resetForm() {
    this.client?.reset();
    this.address?.reset();
    console.log("Formulário limpo.");

  }
}

