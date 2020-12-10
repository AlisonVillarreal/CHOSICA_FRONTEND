import { TestBed } from '@angular/core/testing';

import { OrganizacionPersonaService } from './organizacion-persona.service';

describe('OrganizacionPersonaService', () => {
  let service: OrganizacionPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizacionPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
