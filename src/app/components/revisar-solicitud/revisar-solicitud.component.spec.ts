import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSolicitudComponent } from './revisar-solicitud.component';

describe('RevisarSolicitudComponent', () => {
  let component: RevisarSolicitudComponent;
  let fixture: ComponentFixture<RevisarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
