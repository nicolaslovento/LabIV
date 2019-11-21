import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias-profesor',
  templateUrl: './materias-profesor.component.html',
  styleUrls: ['./materias-profesor.component.css']
})
export class MateriasProfesorComponent implements OnInit {
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
    await this.serviceFirestore.traerMisInscripcionesProfesor(user.correo).then((materias:any)=>{
      
      console.log(materias);
      this.materias=materias;
    });
    
  }

}
