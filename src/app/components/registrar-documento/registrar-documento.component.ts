import { Component } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from '../../services/documento.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Tipo } from 'src/app/models/tipo';
import { TipoService } from 'src/app/services/tipo.service';
import { Proceso } from 'src/app/models/proceso';
import { ProcesoService } from 'src/app/services/proceso.service';

@Component({
  selector: 'app-registrar-documento',
  templateUrl: './registrar-documento.component.html',
  styleUrls: ['./registrar-documento.component.css']
})
export class RegistrarDocumentoComponent {
  documento: Documento = new Documento();
  tipos: Tipo[];
  procesos: Proceso[];

  constructor(private documentoServicio:DocumentoService, private tipoServicio:TipoService, private procesoServicio:ProcesoService, private router:Router) {
  }

  ngOnInit(): void {
    this.obtenerTipos();
    this.obtenerProcesos();
  }

  guardarDocumento(){
    this.documentoServicio.registrarDocumento(this.documento).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeDocumentos();
    },error => console.log(error));
  }

  irALaListaDeDocumentos(){
    this.router.navigate(['/documentos']);
    swal('Documento registrado',`El documento ${this.documento.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarDocumento();
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
}
