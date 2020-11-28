import {Component, OnInit, ViewChild} from '@angular/core';
import {FilsComponent} from "../fils/fils.component";

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent implements OnInit {
@ViewChild (FilsComponent)
  private  p : FilsComponent ;
w ;

  x : number;
d;
  constructor() {}

  ngOnInit(): void {
  }
  add(){
  this.w = this.p.out + 10 ;
       }
start( r : number){
    this.d = r ;
}
}
