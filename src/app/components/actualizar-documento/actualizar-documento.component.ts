import { Component } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import { Documento } from '../../models/documento';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { TipoService } from 'src/app/services/tipo.service';
import { Tipo } from 'src/app/models/tipo';
import { ProcesoService } from 'src/app/services/proceso.service';
import { Proceso } from 'src/app/models/proceso';

@Component({
  selector: 'app-actualizar-documento',
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
  id:number;
  documento:any;
  tipos: Tipo[];
  procesos: Proceso[];

  constructor(private documentoService:DocumentoService,private tipoServicio:TipoService, private procesoServicio:ProcesoService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documento = new Documento();
    this.documentoService.obtenerDocumentoPorId(this.id).subscribe(dato =>{
      this.documento = dato;
    },error => console.log(error));
    this.obtenerTipos();
    this.obtenerProcesos();
  }

  irAlaListaDeDocumentos(){
    this.router.navigate(['/documentos']);
  }

  onSubmit(){
    this.documentoService.actualizarDocumento(this.id,this.documento).subscribe(dato => {
      this.irAlaListaDeDocumentos();
      swal('Documento actualizado',`El documento ${this.documento.nombre} ha sido actualizado con exito`,`success`);
    },error => console.log(error));
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
