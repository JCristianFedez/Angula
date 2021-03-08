import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listado20229400Component } from './listado20229400.component';

describe('Listado20229400Component', () => {
  let component: Listado20229400Component;
  let fixture: ComponentFixture<Listado20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listado20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
