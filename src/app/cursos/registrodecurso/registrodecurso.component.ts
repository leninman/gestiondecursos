import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import {CursosService} from 'src/app/cursos.service';
import {Instructores} from 'src/app/instructores';
import swal from 'sweetalert2';
import {Cursos} from 'src/app/cursos';

@Component({
  selector: 'app-registrodecurso',
  templateUrl: './registrodecurso.component.html',
  styleUrls: ['./registrodecurso.component.css']
})
export class RegistrodecursoComponent implements OnInit {
  
  public instructores:Instructores[];
  public filtroinstructor:boolean=false;
  
  public cursosel:string;
  public periodosel:string;
  public cedulainstructorsel:string;
  public nombreinstructorsel:string;
  public idinstructorsel:number;
  public curso: Cursos = new Cursos();
  public instructor: Instructores;

  constructor(private cursoService:CursosService,private router: Router) { }

  ngOnInit(): void {

    this.cursoService.getInstructores().subscribe(
      (instructores)=>this.instructores=instructores
    );
  }

  public asignarInstructor(instructorSel:Instructores):void{

    this.filtroinstructor=true;

    this.cedulainstructorsel=instructorSel.cedula;

    this.nombreinstructorsel=instructorSel.nombre;

    this.idinstructorsel=instructorSel.idInstructor;

  }

  create(): void {
    this.curso.idInstructor=this.idinstructorsel;
    this.curso.cedInstructor=this.cedulainstructorsel
    this.curso.nombreInstructor=this.nombreinstructorsel;
    this.cursoService.create(this.curso)
      .subscribe(curso => {
        this.router.navigate(['/cursos'])
        swal.fire('Nuevo instructor asignado', `Instructor ${curso.nombreInstructor}  asignado al curso ${curso.curso} `, 'success')
      }
      );
  }
  

  public setCurso():void{
    this.curso.curso=this.cursosel;
  }

  public setPeriodo():void{
    this.curso.periodo=this.periodosel;
  }


}
