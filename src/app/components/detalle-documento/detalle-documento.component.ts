import { Component } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from '../../services/documento.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { TipoService } from 'src/app/services/tipo.service';
import { ProcesoService } from 'src/app/services/proceso.service';

@Component({
  selector: 'app-detalle-documento',
  templateUrl: './detalle-documento.component.html',
  styleUrls: ['./detalle-documento.component.css']
})
export class DetalleDocumentoComponent {
  id:number;
  documento:any;
  tipo:any;
  proceso:any;

  constructor(private documentoServicio:DocumentoService, private tipoServicio:TipoService, private procesoServicio:ProcesoService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documento = new Documento();
    this.documentoServicio.obtenerDocumentoPorId(this.id).subscribe(dato => {
      this.documento = dato;
      this.tipoServicio.obtenerTipoPorId(this.documento.tipo_id).subscribe(dato => {
        this.tipo = dato;
      });
      this.procesoServicio.obtenerProcesoPorId(this.documento.tipo_id).subscribe(dato => {
        this.proceso = dato;
      });
      swal(`Detalles del documento ${this.documento.nombre}`);
    });
  }
}
