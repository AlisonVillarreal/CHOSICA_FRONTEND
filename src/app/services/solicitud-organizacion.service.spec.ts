import { TestBed } from '@angular/core/testing';

import { SolicitudOrganizacionService } from './solicitud-organizacion.service';

describe('SolicitudOrganizacionService', () => {
  let service: SolicitudOrganizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudOrganizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
