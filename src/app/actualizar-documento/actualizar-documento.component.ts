import { Component } from '@angular/core';
import { DocumentoService } from '../documento.service';
import { Documento } from '../documento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-documento',
  templateUrl: './actualizar-documento.component.html',
  styleUrls: ['./actualizar-documento.component.css']
})
export class ActualizarDocumentoComponent {
  id:number;
  documento:Documento = new Documento();
  constructor(private documentoService:DocumentoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documentoService.obtenerDocumentoPorId(this.id).subscribe(dato =>{
      //this.documento = dato;
    },error => console.log(error));
  }

  irAlaListaDeDocumentos(){
    this.router.navigate(['/documentos']);
  }

  onSubmit(){
    this.documentoService.actualizarDocumento(this.id,this.documento).subscribe(dato => {
      this.irAlaListaDeDocumentos();
    },error => console.log(error));
  }
}
