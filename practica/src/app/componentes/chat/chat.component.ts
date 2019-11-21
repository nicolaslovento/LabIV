import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  materias=new Array();
  mensajes=new Array();
  materia;
  mensaje:string;
  constructor(
    private serviceFirestore: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.cargarMaterias().then(()=>{
      console.log(this.materias);
    });
    
  }

  async cargarMaterias() {
    this.materias = [];
    await this.serviceFirestore.traerMaterias().then((materias: any) => {

      this.materias = materias;
    });

  }

  cargarMateria(e){
    this.serviceFirestore.traerMensajes().doc(e).collection("mensajes").snapshotChanges().subscribe((msj)=>{
      this.mensajes.length=0;
      msj.map((m)=>{
        this.mensajes.push(m.payload.doc.data());
        this.materia=e;
        this.OrderByDate();
      this.OrderByTime();
        
      })
    })
    
  }

  

  OrderByTime() {
    this.mensajes = this.mensajes.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      let auxReturn = 0;
  
      if (fechaA > fechaB) {
        auxReturn = 1;
      } else if (fechaA < fechaB) {
        auxReturn = -1;
      } else {
        auxReturn = 0;
      }
  
      return auxReturn;
    });
  }
  
  OrderByDate() {
    this.mensajes = this.mensajes.sort((a, b) => {
      const fechaA = new Date(a.fecha).getDate();
      const fechaB = new Date(b.fecha).getDate();
      let auxReturn = 0;
  
      if (fechaA > fechaB) {
        auxReturn = 1;
      } else if (fechaA < fechaB) {
        auxReturn = -1;
      } else {
        auxReturn = 0;
      }
  
      return auxReturn;
    });
  }

  enviarMensaje(){
    let user=JSON.parse(localStorage.getItem('user'));
    this.serviceFirestore.guardarMensaje(this.materia,user.correo,this.mensaje,new Date().getTime()).then(()=>{
      console.log("mensaje enviado");
    });
  }

}
