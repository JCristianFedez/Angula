import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { Dado20229400Component } from './dado20229400/dado20229400.component';
import { Juegodados20229400Component } from './juegodados20229400/juegodados20229400.component';
import { Temporizador20229400Component } from './temporizador20229400/temporizador20229400.component';
import { Contadortemporizador20229400Component } from './contadortemporizador20229400/contadortemporizador20229400.component';
import { Listado20229400Component } from './listado20229400/listado20229400.component';
import { Listadomaterial20229400Component } from './listadomaterial20229400/listadomaterial20229400.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    Dado20229400Component,
    Juegodados20229400Component,
    Temporizador20229400Component,
    Contadortemporizador20229400Component,
    Listado20229400Component,
    Listadomaterial20229400Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
