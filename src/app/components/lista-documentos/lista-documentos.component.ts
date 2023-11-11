import { Component } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from '../../services/documento.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TipoService } from 'src/app/services/tipo.service';
import { Tipo } from 'src/app/models/tipo';
import { Proceso } from 'src/app/models/proceso';
import { ProcesoService } from 'src/app/services/proceso.service';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent {
  documentos: Documento[];
  tipos: Tipo[];
  procesos: Proceso[];

  constructor(private documentoServicio:DocumentoService, private tipoServicio:TipoService, private procesoServicio:ProcesoService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerDocumentos();
    this.obtenerTipos();
    this.obtenerProcesos();
  }

  private obtenerDocumentos(){
    this.documentoServicio.obtenerListaDeDocumentos().subscribe(dato => {
      this.documentos = dato;
    });
  }

  private obtenerTipos(){
    this.tipoServicio.obtenerListaDeTipos().subscribe(dato => {
      this.tipos = dato;
    });
  }

  private obtenerProcesos(){
    this.procesoServicio.obtenerListaDeProcesos().subscribe(dato => {
      this.procesos = dato;
    });
  }

  actualizarDocumento(id:number){
    this.router.navigate(['actualizar-documento',id]);
  }

  eliminarDocumento(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el documento",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.documentoServicio.eliminarDocumento(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDocumentos();
          swal(
            'Documento eliminado',
            'El documento ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetalleDocumento(id:number){
    this.router.navigate(['detalle-documento',id]);
  }

}
