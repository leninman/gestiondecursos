import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from './cursos/cursos.component';
import {RegistrodecursoComponent} from './cursos/registrodecurso/registrodecurso.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/cursos', pathMatch: 'full'},
  { path: 'cursos', component: CursosComponent },
  { path: 'registrar', component: RegistrodecursoComponent }
  
];
@NgModule({
 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
