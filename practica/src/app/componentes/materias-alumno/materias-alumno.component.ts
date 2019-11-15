import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-materias-alumno',
  templateUrl: './materias-alumno.component.html',
  styleUrls: ['./materias-alumno.component.css']
})
export class MateriasAlumnoComponent implements OnInit {

  materias=new Array();
  
  constructor(
    private serviceFirestore:FirebaseService,
    private router:Router) { }

  ngOnInit() {

    this.cargarMisMaterias();
  }

  async cargarMisMaterias(){
    let user=JSON.parse(localStorage.getItem("user"));
    this.materias=[];
    await this.serviceFirestore.traerMisInscripciones(user.correo).then((materias:any)=>{
      
      console.log(materias);
      this.materias=materias;
    });
    
  }

  

}
