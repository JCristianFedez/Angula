import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contadortemporizador20229400Component } from './contadortemporizador20229400.component';

describe('Contadortemporizador20229400Component', () => {
  let component: Contadortemporizador20229400Component;
  let fixture: ComponentFixture<Contadortemporizador20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contadortemporizador20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contadortemporizador20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
