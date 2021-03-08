import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listadomaterial20229400Component } from './listadomaterial20229400.component';

describe('Listadomaterial20229400Component', () => {
  let component: Listadomaterial20229400Component;
  let fixture: ComponentFixture<Listadomaterial20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listadomaterial20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listadomaterial20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
