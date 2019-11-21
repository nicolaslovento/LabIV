import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';
import { AltaMateriaAlumnoComponent } from './componentes/alta-materia-alumno/alta-materia-alumno.component';
import { MateriasAlumnoComponent } from './componentes/materias-alumno/materias-alumno.component';
import { HomeProfesorComponent } from './componentes/home-profesor/home-profesor.component';
import { MateriasProfesorComponent } from './componentes/materias-profesor/materias-profesor.component';
import { AlumnosProfesorComponent } from './componentes/alumnos-profesor/alumnos-profesor.component';
import { ChatComponent } from './componentes/chat/chat.component';
import {AuthGuard} from './guards/auth.guard';



const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'home-adm',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'alta-materia',component:AltaMateriaComponent},
  {path:'listado-materias',component:ListadoMateriasComponent},
  {path:'listado-usuarios',component:ListadoUsuariosComponent},
  {path:'home-alumno',component:HomeAlumnoComponent},
  {path:'alta-materia-alumno',component:AltaMateriaAlumnoComponent},
  {path:'materias-alumno',component:MateriasAlumnoComponent},
  {path:'home-profesor',component:HomeProfesorComponent},
  {path:'materias-profesor',component:MateriasProfesorComponent},
  {path:'alumnos-profesor',component:AlumnosProfesorComponent},
  {path:'chat',component:ChatComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
