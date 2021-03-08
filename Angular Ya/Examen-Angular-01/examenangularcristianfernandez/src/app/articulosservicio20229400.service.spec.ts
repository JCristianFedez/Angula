import { TestBed } from '@angular/core/testing';

import { Articulosservicio20229400Service } from './articulosservicio20229400.service';

describe('Articulosservicio20229400Service', () => {
  let service: Articulosservicio20229400Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Articulosservicio20229400Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
