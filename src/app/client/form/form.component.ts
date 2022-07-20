import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  client?: FormGroup;
  address?: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private cookie: CookieService) {}

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
      this.cookie.put('clientId', '123456');
      this.router.navigate(['logado'])
      return alert("Client with id (" + this.cookie.get("clientId") + ") successfully logged in;.")

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

