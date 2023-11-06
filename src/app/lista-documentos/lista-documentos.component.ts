import { Component } from '@angular/core';
import { Documento } from '../documento';
import { DocumentoService } from '../documento.service';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent {
  documentos: Documento[];

  constructor(private documentoServicio:DocumentoService) {
  }

  ngOnInit(): void {
    this.obtenerDocumentos();
  }

  private obtenerDocumentos(){
    this.documentoServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

}
