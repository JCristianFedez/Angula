import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Jose Cristian";
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
    codigo: 1,
    descripcion: "papas",
    precio: 12.33
  },{
    codigo: 2,
    descripcion: "manzanas",
    precio: 54
  }];
  fechaActual = new Date();

  // Pipeline personalizada
  vector = [1,2,3,4,5,6,7];
}
