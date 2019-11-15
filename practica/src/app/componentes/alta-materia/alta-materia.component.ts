import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  nombre="";
  cuatrimestre="";
  cupos="";
  profesor="";
  profesores=new Array();
  constructor(
    private serviceFirestore:FirebaseService,
    private router:Router) { }

  ngOnInit() {
    this.cargarProfesores();
  }


  async cargarProfesores(){
    this.profesores=[];
    await this.serviceFirestore.traerUsuariosPorTipo("profesor").then((usuarios:any)=>{
      
      this.profesores=usuarios;
    });
    
  }

  cargarMateria(){
    let materia={
      nombre:this.nombre,
      cuatrimestre:this.cuatrimestre,
      cupos:this.cupos,
      profesor:this.profesor
    }

    this.serviceFirestore.cargarMateria(materia).then(()=>{
      console.log("subio");
    })
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
