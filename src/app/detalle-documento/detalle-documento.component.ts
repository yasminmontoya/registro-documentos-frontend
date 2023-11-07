import { Component } from '@angular/core';
import { Documento } from '../documento';
import { DocumentoService } from '../documento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-documento',
  templateUrl: './detalle-documento.component.html',
  styleUrls: ['./detalle-documento.component.css']
})
export class DetalleDocumentoComponent {
  id:number;
  documento:Documento;

  constructor(private documentoServicio:DocumentoService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documento = new Documento();
    this.documentoServicio.obtenerDocumentoPorId(this.id).subscribe(dato => {
      //this.documento = dato;
      console.log(dato);
    });
  }
}