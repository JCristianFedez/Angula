import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contadortemporizador20229400',
  templateUrl: './contadortemporizador20229400.component.html',
  styleUrls: ['./contadortemporizador20229400.component.css']
})
export class Contadortemporizador20229400Component implements OnInit {

  mensaje: String;

  constructor() { }

  ngOnInit(): void {
  }

  finalcuenta(t) {
    alert(`Final de la cuenta en ${t} segundos`);
  }
}
