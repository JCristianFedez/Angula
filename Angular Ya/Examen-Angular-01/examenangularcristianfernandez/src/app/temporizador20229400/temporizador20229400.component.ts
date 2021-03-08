import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temporizador20229400',
  templateUrl: './temporizador20229400.component.html',
  styleUrls: ['./temporizador20229400.component.css']
})
export class Temporizador20229400Component implements OnInit {
  segundo: number = 0;
  @Input() inicio;
  @Output() zerocount = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.segundo = this.inicio;
    let intervalo = setInterval(() => {
      this.segundo--;
      if (this.segundo == 0){
        this.zerocount.emit(this.segundo);
        clearInterval(intervalo);
      }
    }, 1000);
  }

}
