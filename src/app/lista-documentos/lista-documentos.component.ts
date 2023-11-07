import { Component } from '@angular/core';
import { Documento } from '../documento';
import { DocumentoService } from '../documento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent {
  documentos: Documento[];

  constructor(private documentoServicio:DocumentoService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerDocumentos();
  }

  private obtenerDocumentos(){
    this.documentoServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

  actualizarDocumento(id:number){
    this.router.navigate(['actualizar-documento',id]);
  }

  eliminarDocumento(id:number){
    this.documentoServicio.eliminarDocumento(id).subscribe(dato => {
      console.log(dato);
      this.obtenerDocumentos();
    });
  }

  verDetalleDocumento(id:number){
    this.router.navigate(['detalle-documento',id]);
  }

}
