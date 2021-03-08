import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegodados20229400',
  templateUrl: './juegodados20229400.component.html',
  styleUrls: ['./juegodados20229400.component.css']
})
export class Juegodados20229400Component implements OnInit {
  valor1: number;
  valor2: number;
  valor3: number;
  valor4: number;
  puntuacion: number;
  resultado: string;

  constructor() { 
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.valor4 = this.retornarAleatorio();
    this.puntuacion = this.valor1 + this.valor2 + this.valor3 + this.valor4;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.valor4 = this.retornarAleatorio();
    this.puntuacion = this.valor1 + this.valor2 + this.valor3 + this.valor4;

    if (this.puntuacion > 12)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }
  
  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  ngOnInit(): void {
  }

}
