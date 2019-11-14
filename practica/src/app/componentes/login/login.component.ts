import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo:string="";
  nombre:string="";
  apellido:string="";
  clave:string="";
  claveRepetida:string="";

  mostrarRegistro=false;
  mostrarError=false;
  error="";


  constructor(

    private router:Router,
    private dbService:FirebaseService
  ) { }

  ngOnInit() {

  }



  verificarError(){

    let errores=0;
    let vacios=0;

    if(this.correo==""){

      this.error="Debe ingresar un correo.";
      vacios++;

    }



    if(this.clave==""){

      this.error="Debe ingresar una clave.";
      vacios++;

    }

    if(this.correo.indexOf('@')==-1){

      this.error="El correo debe tener un formato válido.";
      errores++;

    }

    if(this.clave.length>0 && this.clave.length<5){

      this.error="La clave debe tener al menos 5 dígitos.";
      errores++;

    }


    if(vacios>=2){
      this.mostrarError=true;
      this.error="No puede haber campos vacíos.";
      return true;
    }

    if(vacios==1){
      this.mostrarError=true;

      return true;
    }



    if(errores>0){
      this.mostrarError=true;
      return true;
    }



  }

  redireccionar(usuario:any){
    switch(usuario.tipo){
      case 'administrador':
        alert("bienvenido admin")
        this.router.navigateByUrl('menu-admin');
      break;
      case 'profesor':
        this.router.navigateByUrl('menu-cliente');
      break;
      case 'alumno':
        this.router.navigateByUrl('menu-especialista');
      break;

    }
  }

  login(){

    if(!this.verificarError()){

      this.dbService.verificarUsuario(this.correo,this.clave).then((user)=>{
        console.log(user);
        this.redireccionar(user);
      }).catch((error)=>{

        this.error=error;
        this.mostrarError=true;
      });
    }

  }




}
