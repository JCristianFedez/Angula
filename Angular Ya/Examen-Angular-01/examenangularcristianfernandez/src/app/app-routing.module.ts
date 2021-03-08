import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dado20229400Component } from "./dado20229400/dado20229400.component";
import { Juegodados20229400Component } from "./juegodados20229400/juegodados20229400.component";
import { Contadortemporizador20229400Component } from "./contadortemporizador20229400/contadortemporizador20229400.component";
import { Listado20229400Component } from "./listado20229400/listado20229400.component";
import { Listadomaterial20229400Component } from "./listadomaterial20229400/listadomaterial20229400.component";

const routes: Routes = [
  {
    path:'dado20229400',
    component:Dado20229400Component
  },
  {
    path:'juegodados20220400',
    component:Juegodados20229400Component
  },
  {
    path:'contadortemporizador20229400',
    component:Contadortemporizador20229400Component
  },
  {
    path:'listado20229400',
    component:Listado20229400Component
  },
  {
    path:'listadomaterial20229400',
    component:Listadomaterial20229400Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
