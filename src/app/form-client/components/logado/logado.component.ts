import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.scss']
})
export class LogadoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private cookie: CookieService) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({ messageResolver }) => {
      console.log("resolver funcionando")

    })
  }

  resetCookie(){
    this.cookie.removeAll();
    window.location.reload();

  }

}
