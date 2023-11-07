import { Injectable } from '@angular/core';
import { Tipo } from '../models/tipo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  //Esta URL obtiene el listado de todos los tipos en el backend
  private baseURL = "https://yasminmontoya-registro-documentos.up.railway.app/api/tipos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los tipos
  obtenerListaDeTipos():Observable<Tipo[]>{
    return this.httpClient.get<Tipo[]>(`${this.baseURL}`);
  }
}
