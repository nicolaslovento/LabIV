import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  materias=new Array();
  
  constructor(
    private serviceFirestore:FirebaseService,
    private router:Router) { }

  ngOnInit() {

    this.cargarMaterias();
  }

  async cargarMaterias(){
    this.materias=[];
    await this.serviceFirestore.traerMaterias().then((materias:any)=>{
      
      this.materias=materias;
    });
    
  }

}
