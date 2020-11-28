import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() x : number;
y : number;
out =  85;
outout = 58 ;
@Output () g = new  EventEmitter <number>() ;
  constructor() { }

  ngOnInit(): void {
  }
  affactaion() {
    this.y = this.x + 4;
  }
  on(){
    this.g.emit(this.outout);
  }
}
