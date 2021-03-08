import { Component, OnInit } from '@angular/core';
import { Articulosservicio20229400Service } from '../articulosservicio20229400.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-listado20229400',
  templateUrl: './listado20229400.component.html',
  styleUrls: ['./listado20229400.component.css']
})
export class Listado20229400Component implements OnInit {

  articulos=null;
  
  // Estructura de cada articulo
  // art={
  //   codigo:null,
  //   descripcion:null,
  //   precio:null
  // }

  constructor(private articulosServicio: Articulosservicio20229400Service) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe(result => this.articulos = result);
  }

  hayRegistros() {
    return true;
  } 

}
