import { TestBed } from '@angular/core/testing';

import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TesteService} from "./teste.service";

fdescribe('TesteService', () => {
  let service: TesteService;
  let http: HttpClient;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]});
    service = TestBed.inject(TesteService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar um GET com o endpoint correto', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTest();
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

  })
});
