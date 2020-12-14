import { TestBed } from '@angular/core/testing';

import { TipoorganizacionService } from './tipoorganizacion.service';

describe('TipoorganizacionService', () => {
  let service: TipoorganizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoorganizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
