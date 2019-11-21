import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  nombre = "";
  cuatrimestre = "";
  cupos: number = 0;
  profesor = "";
  profesores = new Array();
  mostrarExito = false;
  mostrarError = false;
  exito = "";
  error = "";
  constructor(
    private serviceFirestore: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.cargarProfesores();
  }


  async cargarProfesores() {
    this.profesores = [];
    await this.serviceFirestore.traerUsuariosPorTipo("profesor").then((usuarios: any) => {

      this.profesores = usuarios;
    });

  }

  verificarError() {
    
    let flag = false;
    let vacios = 0;

    if (this.nombre=="") {
     
      this.error = "Debe ingresar el nombre de la materia.";
      vacios++;
      flag = true;
    }

    if (this.cupos == 0) {
      vacios++;
      flag = true;
    }

    if (this.cupos < 0 || this.cupos > 30) {
      this.error = "Los cupos de la materia deben ser mínimo 1 y máximo 30.";
      flag = true;
    }

    if (this.profesor == "") {
      this.error = "Debe elegir un profesor.";
      vacios++;
      flag = true;
    }

    if (this.cuatrimestre == "") {
      this.error = "Debe elegir un cuatrimestre.";
      vacios++;
      flag = true;
    }

    if (flag) {
      
      if (vacios > 1) {
       
        this.error = "No puede haber campos vacíos.";
        this.mostrarError = true;
        return true;
      } else {
        this.mostrarError = true;
        return true;
      }

      
    } else {
      return false;
    }

  }

  cargarMateria() {

    if (!this.verificarError()) {

      let materia = {
        nombre: this.nombre,
        cuatrimestre: this.cuatrimestre,
        cupos: this.cupos,
        profesor: this.profesor
      }


      this.serviceFirestore.cargarMateria(materia).then(() => {
        this.exito = "Se cargó con exito la materia " + this.nombre + ",y se habilitó el chat del mismo.";
        this.mostrarExito = true;
      })
    }

  }

  /*cargarProducto(productoNuevo:any) {
return new Promise((resolve,rejected)=>{

  this.dbFirestore.collection("productos").doc(productoNuevo.nombre).set({

  nombre:productoNuevo.nombre,
  descripcion:productoNuevo.descripcion,
  tiempoElab:productoNuevo.tiempoElab,
  precio:productoNuevo.precio,
  foto1:productoNuevo.foto1,
  foto2:productoNuevo.foto1,
  foto3:productoNuevo.foto1,


}).then(()=>{
  resolve(productoNuevo);
}).catch((error)=>{
  rejected(error);
});
})
}

}*/

}
