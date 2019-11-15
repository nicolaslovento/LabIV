import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-materia-alumno',
  templateUrl: './alta-materia-alumno.component.html',
  styleUrls: ['./alta-materia-alumno.component.css']
})
export class AltaMateriaAlumnoComponent implements OnInit {

  materia;
  materias = new Array();

  constructor(
    private serviceFirestore: FirebaseService,
    private router: Router) { }


  ngOnInit() {
    this.cargarMaterias();
  }


  async cargarMaterias() {
    this.materias = [];
    await this.serviceFirestore.traerMaterias().then((materias: any) => {

      this.materias = materias;
    });

  }

  traerMateria() {
    for (let i = 0; i < this.materias.length; i++) {

      if (this.materias[i].id= this.materia) {
        return this.materias[i];
      }
    }

  
}

anotarseEnMateria(){
  let materia = this.traerMateria();
  
  let alumno = JSON.parse(localStorage.getItem("user"));
  this.serviceFirestore.inscribirseAMateria(materia, alumno).then(() => {
    console.log("subido");
  }).catch(error => {
    console.log(error);
  })
}

}
