import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client";

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  c1: Client ;
  constructor() { }

  ngOnInit(): void {
    this.c1 = new Client ();
  }

}
