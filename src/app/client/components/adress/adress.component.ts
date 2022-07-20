import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientAdressModel} from "../../../models/client.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) {
  }

  private subscription?: Subscription;

  @Output() addressEvent = new EventEmitter<ClientAdressModel | any>();

  ngOnInit(): void {

    this.subscription =
      this.formAddress.valueChanges.subscribe(data => {
        if (this.formAddress.valid) {
          const address = {
              state: this.formAddress.get('state')?.value,
              city: this.formAddress.get('city')?.value,
              cep: this.formAddress.get('cep')?.value
            }
          console.log(this.formAddress.valid);
          this.addressEvent.emit(this.formAddress);
        }
      })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

  }

  formAddress = this.fb.group({
    state:['', Validators.required],
    city: ['', Validators.required],
    cep:  ['', Validators.required]

  })

  resetAddress() {
    this.formAddress.reset();
    console.log("Address limpo.")

  }

}

