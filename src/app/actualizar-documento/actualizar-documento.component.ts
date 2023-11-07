import { Component } from '@angular/core';
import { DocumentoService } from '../documento.service';
import { Documento } from '../documento';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-documento',
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
  id:number;
  documento:any;
  constructor(private documentoService:DocumentoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documento = new Documento();
    this.documentoService.obtenerDocumentoPorId(this.id).subscribe(dato =>{
      this.documento = dato;
    },error => console.log(error));
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
}
