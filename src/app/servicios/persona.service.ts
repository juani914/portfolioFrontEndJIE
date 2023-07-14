import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.backendURL + '/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil/' + id);
  }

  public actualizarPersona(persona: persona): Observable<any> {
    return this.http.put<any>(this.URL + 'update/' + persona.id, persona);
  }
}