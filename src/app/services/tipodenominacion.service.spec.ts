import { TestBed } from '@angular/core/testing';

import { TipodenominacionService } from './tipodenominacion.service';

describe('TipodenominacionService', () => {
  let service: TipodenominacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodenominacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
