import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDocumentoComponent } from './actualizar-documento.component';

describe('ActualizarDocumentoComponent', () => {
  let component: ActualizarDocumentoComponent;
  let fixture: ComponentFixture<ActualizarDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarDocumentoComponent]
    });
    fixture = TestBed.createComponent(ActualizarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
