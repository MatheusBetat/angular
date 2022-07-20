import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestModel} from "../../models/teste.model";
import {TesteService} from "../../services/teste/teste.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy{

  public test!: TestModel[];
  private subscription?: Subscription;

  constructor(private testeService: TesteService) {
  }

  getJson(){
    this.subscription =
    this.testeService.getTest().subscribe((data: TestModel[]) => {
      this.test = data;

    })
  }

  ngOnInit(): void {
    this.getJson()

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();

  }

}
