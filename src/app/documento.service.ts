import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from './documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  //Esta URL obtiene el listado de todos los documentos en el backend
  private baseURL = "https://yasminmontoya-registro-documentos.up.railway.app/api/documentos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los documentos
  obtenerListaDeDocumentos():Observable<Documento[]>{
    return this.httpClient.get<Documento[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un documento
  registrarDocumento(documento:Documento) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,documento);
  }

  //este metodo nos sirve para obtener o buscar un documento
  obtenerDocumentoPorId(id:number) : Observable<Object>{
    return this.httpClient.get<Documento[]>(`${this.baseURL}/${id}`);
  }

  //este metodo nos sirve para actualizar un documento
  actualizarDocumento(id:number,documento:Documento) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,documento);
  }

  //este metodo nos sirve para eliminar un documento
  eliminarDocumento(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
