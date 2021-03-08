import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temporizador20229400Component } from './temporizador20229400.component';

describe('Temporizador20229400Component', () => {
  let component: Temporizador20229400Component;
  let fixture: ComponentFixture<Temporizador20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temporizador20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temporizador20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
