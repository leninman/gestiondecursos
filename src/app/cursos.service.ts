import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Cursos} from './cursos';
import {Instructores} from './instructores';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private urlEndPoint:string='http://localhost:8080/app/' ;

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getCursos(): Observable<Cursos[]>{
    return this.http.get(this.urlEndPoint+'consultacursos').pipe(map(response =>response as Cursos[]));
  }

  getInstructores():Observable<Instructores[]>{
    return this.http.get(this.urlEndPoint+'consultarinstructores').pipe(map(response =>response as Instructores[]));
  }

  getInstructor(cedula:string): Observable<Instructores>{
    return this.http.get<Instructores>(`${this.urlEndPoint+'consultarinstructor'}/${cedula}`);
    
  }

  create(curso: Cursos) : Observable<Cursos> {
    return this.http.post<Cursos>(this.urlEndPoint+'guardarcurso', curso, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cursos>{
    return this.http.delete<Cursos>(`${this.urlEndPoint+'eliminarcurso'}/${id}`, {headers: this.httpHeaders})
  
  }


}
