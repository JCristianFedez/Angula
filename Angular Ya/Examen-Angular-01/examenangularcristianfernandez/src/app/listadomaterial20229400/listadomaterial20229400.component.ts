import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Articulosservicio20229400Service } from '../articulosservicio20229400.service';



@Component({
  selector: 'app-listadomaterial20229400',
  templateUrl: './listadomaterial20229400.component.html',
  styleUrls: ['./listadomaterial20229400.component.css']
})
export class Listadomaterial20229400Component implements OnInit {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

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

  @ViewChild(MatTable) tabla1: MatTable<Articulosservicio20229400Service>;

}
