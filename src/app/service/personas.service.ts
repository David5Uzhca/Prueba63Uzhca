import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Persona } from '../domain/persona';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    let url = environment.WS_PATH + "/clientes/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }

  savePersona(persona: Persona){
    let url = environment.WS_PATH + "/clientes"
    return this.http.post<any>(url, persona)
  }
  dropPersona(id: number){
    let url = environment.WS_PATH + "/clientes?id=" + id;
    console.log("URL del servicio web para eliminar:", url);
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error("Error al eliminar persona:", error);
          throw error;
        })
      );
  }
  
  searchPersonByDNI(dni: string) {
    let url = `${environment.WS_PATH}/personas/search?dni=${dni}`;
    return this.http.get<any>(url);
  }

  updatePersona(persona: Persona){
    let url = environment.WS_PATH + "/clientes"
    return this.http.put<any>(url, persona)
  }

}
