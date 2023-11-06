import { Component } from '@angular/core';
import { Documento } from '../documento';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent {
  documentos: Documento[];

  constructor() {
  }

  ngOnInit(): void {
    this.documentos = [{
      "id": 1,
      "nombre" : "INSTRUCTIVO DE DESARROLLO",
      "codigo": "INS-ING-1",
      "contenido": "CONTENIDO 1",
      "tipo_id": "Instructivo",
      "proceso_id": "Ingenieria"
    },
    {
      "id": 2,
      "nombre" : "INSTRUCTIVO DE DESARROLLO",
      "codigo": "INS-ING-2",
      "contenido": "CONTENIDO 2",
      "tipo_id": "Instructivo",
      "proceso_id": "Ingenieria"
    },
  ];
  }

}
