import { Component, OnInit, Output, Input } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo:number=0;
  @Input() inicio:string;
  @Output() multiplo10:EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.segundo = parseInt(this.inicio);
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo.toString());
    }, 1000);
  }

}
