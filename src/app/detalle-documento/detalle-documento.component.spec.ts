import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDocumentoComponent } from './detalle-documento.component';

describe('DetalleDocumentoComponent', () => {
  let component: DetalleDocumentoComponent;
  let fixture: ComponentFixture<DetalleDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDocumentoComponent]
    });
    fixture = TestBed.createComponent(DetalleDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
