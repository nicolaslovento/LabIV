import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  correo:string="";
  clave:string="";
  tipo:string="";
  mostrarError:boolean=false;
  error:string="";

  constructor(
    public router:Router,
    private dbService:FirebaseService
  ) { }

  ngOnInit() {
  }

  registrar(){
    let usuarioNuevo={
      correo:this.correo,
      clave:this.clave,
      tipo:this.tipo
    }
    this.dbService.cargarUsuario(usuarioNuevo).then(()=>{
      ;
    })
  }

}
