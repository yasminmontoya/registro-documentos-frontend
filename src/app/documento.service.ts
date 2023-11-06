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
}
