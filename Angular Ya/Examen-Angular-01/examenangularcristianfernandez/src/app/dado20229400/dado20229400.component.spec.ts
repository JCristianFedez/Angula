import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dado20229400Component } from './dado20229400.component';

describe('Dado20229400Component', () => {
  let component: Dado20229400Component;
  let fixture: ComponentFixture<Dado20229400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dado20229400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dado20229400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
