import { Component, OnInit } from '@angular/core';
import {Cursos} from '../cursos';
import {CursosService} from '../cursos.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos:Cursos[];
  private curso: Cursos = new Cursos();

  constructor(private cursosService:CursosService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe(
      (cursos)=>this.cursos=cursos
    );
  }

  delete(curso: Cursos): void {

    this.cursosService.delete(curso.idCurso).subscribe(
      response => {
        this.cursos = this.cursos.filter(cur => cur !== curso)
        swal.fire(
          'Curso Eliminado!',
          `Curso ${curso.curso} eliminado con éxito.`,
          'success'
        )
      }
    )
    
  }


 

}
