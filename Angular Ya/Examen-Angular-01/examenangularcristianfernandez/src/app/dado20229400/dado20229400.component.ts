import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-dado20229400',
  templateUrl: './dado20229400.component.html',
  styleUrls: ['./dado20229400.component.css']
})
export class Dado20229400Component implements OnInit {
  @Input() valor: number;
  constructor() { }

  ngOnInit(): void {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }
}
