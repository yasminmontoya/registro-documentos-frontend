import { Component } from '@angular/core';
import { Documento } from '../documento';
import { DocumentoService } from '../documento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-documento',
  templateUrl: './registrar-documento.component.html',
  styleUrls: ['./registrar-documento.component.css']
})
export class RegistrarDocumentoComponent {
  documento: Documento = new Documento();

  constructor(private documentoServicio:DocumentoService, private router:Router) {
  }

  guardarDocumento(){
    this.documentoServicio.registrarDocumento(this.documento).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeDocumentos();
    },error => console.log(error));
  }

  irALaListaDeDocumentos(){
    this.router.navigate(['/documentos']);
  }

  onSubmit(){
    this.guardarDocumento();
  }
}
