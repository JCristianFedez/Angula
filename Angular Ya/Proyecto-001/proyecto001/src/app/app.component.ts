import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Cristian Fernandez";
  apellido = "";
  edad = 20;
  email = "j.cristian.2daw@gmail.com";
  sueldos = [1700, 1600, 1900];
  activo = true;
  contador = 1;

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  esActivo() {
    if (this.activo) {
      return "Trabajador activo";
    } else {
      return "Trabajador inactivo";
    }
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let i = 0; i < this.sueldos.length; i++) {
      suma += this.sueldos[i];
    }
    return suma;
  }
}
