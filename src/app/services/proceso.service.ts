import { Injectable } from '@angular/core';
import { Proceso } from '../models/proceso';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  //Esta URL obtiene el listado de todos los procesos en el backend
  private baseURL = "https://yasminmontoya-registro-documentos.up.railway.app/api/procesos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los procesos
  obtenerListaDeProcesos():Observable<Proceso[]>{
    return this.httpClient.get<Proceso[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para obtener o buscar un tipo
  obtenerProcesoPorId(id:number) : Observable<Object>{
    return this.httpClient.get<Proceso[]>(`${this.baseURL}/${id}`);
  }
  
}
