import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TestModel} from "../../models/teste.model";

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  readonly testApi = 'https://jsonplaceholder.typicode.com/posts';

  public getTest():Observable<TestModel[]>{
    return this.http.get<TestModel[]>(this.testApi);

  }

}
