import { Component } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from '../../services/documento.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-documento',
  templateUrl: './detalle-documento.component.html',
  styleUrls: ['./detalle-documento.component.css']
})
export class DetalleDocumentoComponent {
  id:number;
  documento:any;

  constructor(private documentoServicio:DocumentoService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documento = new Documento();
    this.documentoServicio.obtenerDocumentoPorId(this.id).subscribe(dato => {
      this.documento = dato;
      swal(`Detalles del documento ${this.documento.nombre}`);
    });
  }
}
