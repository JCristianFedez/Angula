import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Con esto falla hay que añadirlo ariba
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo = 0;
  @Input() inicio;
  @Output() multiplo10 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if(this.segundo % 10 == 0){
        this.multiplo10.emit(this.segundo.toString());
      }
    },1000);
  
  }

}
