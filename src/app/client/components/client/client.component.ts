import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Moment} from "moment";
import {ClientAdressModel, ClientGenereEnum, ClientModel} from "../../../models/client.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) {
  }

  private subscription?: Subscription;

  @Output() private clientEvent = new EventEmitter<ClientModel | any>();

  ngOnInit(): void {

    this.subscription =
    this.formClient.valueChanges.subscribe(data => {
      if (this.formClient.valid) {
        const client = {
          name: this.formClient.get('name')?.value,
          email: this.formClient.get('email')?.value,
          genre: this.formClient.get('genre')?.value,
          birthDate: this.formClient.get('birthDate')?.value,
          address: null
        }
        console.log(this.formClient.valid);
        this.clientEvent.emit(this.formClient);
        console.log('form', this.formClient);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

  }

  formClient = this.fb.group({
    name:      ['', Validators.required],
    email:     [null, Validators.required, /*Validators.email*/],
    genre:     ['', Validators.required],
    birthDate: ['', Validators.required,/* Validators.pattern('dd/MM/yyyy')*/]

  })

}
