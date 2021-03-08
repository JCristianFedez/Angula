import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegodados20229400Component } from './juegodados20229400.component';

describe('Juegodados20229400Component', () => {
  let component: Juegodados20229400Component;
  let fixture: ComponentFixture<Juegodados20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegodados20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Juegodados20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
