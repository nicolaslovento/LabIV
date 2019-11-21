import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-profesor',
  templateUrl: './alumnos-profesor.component.html',
  styleUrls: ['./alumnos-profesor.component.css']
})
export class AlumnosProfesorComponent implements OnInit {

  materias=new Array();
  misAlumnos=new Array();
  inscripciones=new Array();
  constructor(
    private serviceFirestore:FirebaseService,
    private router:Router) { }

  ngOnInit() {

    this.cargarMisMaterias().then(()=>{
      this.traerTodasLasInscripcionesYFiltrar().then(()=>{
        console.log(this.materias);
        console.log(this.inscripciones);
        setTimeout(()=>{
          this.filtrar(this.materias,this.inscripciones);
        },2000);
        setTimeout(()=>{
          console.log(this.misAlumnos);
        },3000);
        
      });
    });
  }

  async cargarMisMaterias(){
    let user=JSON.parse(localStorage.getItem("user"));
    this.materias=[];
    await this.serviceFirestore.traerMisInscripcionesProfesor(user.correo).then((materias:any)=>{
      
      this.materias=materias;
      
    });
    
  }


  async traerTodasLasInscripcionesYFiltrar(){
    
    this.inscripciones=[];
    await this.serviceFirestore.traerTodasLasInscripciones().then((insc:any)=>{
      
      this.inscripciones=insc;
      //console.log(this.inscripciones);
      
    });
    
  }

  filtrar(materias,inscripciones){
    this.misAlumnos.length=0;
    //console.log(materias,inscripciones);
    inscripciones.forEach(insc => {
      let i=0
      for(i=0;i<materias.length;i++){
        if(insc.materiaId==materias[i].id){
          this.misAlumnos.push(insc);
        }
      }
     
    });
    //console.log("das"+this.misAlumnos);
  }

}
