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
  clave:string="";
  error=false;
  mostrarAlertSuccess=false;
  mostrarAlertDanger=false;
  mensajeAlert="";
  class:string="";

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

      this.mensajeAlert="Debe ingresar un correo.";
      vacios++;

    }

    if(this.clave==""){

      this.mensajeAlert="Debe ingresar una clave.";
      vacios++;

    }

    if(this.correo.indexOf('@')==-1){

      this.mensajeAlert="El correo debe tener un formato válido.";
      errores++;

    }

    if(this.clave.length>0 && this.clave.length<5){

      this.mensajeAlert="La clave debe tener al menos 5 dígitos.";
      errores++;

    }


    if(vacios>=2){
      this.mostrarAlertDanger=true;
      this.mensajeAlert="No puede haber campos vacíos.";
     
      return true;
    }

    if(vacios==1){
     
      this.mostrarAlertDanger=true;
      return true;
    }



    if(errores>0){
      this.mostrarAlertDanger=true;
      
      return true;
    }



  }

  redireccionar(usuario:any){
    switch(usuario.tipo){
      case 'administrador':
        alert("bienvenido admin")
        this.router.navigateByUrl('home-adm');
      break;
      case 'profesor':
        this.router.navigateByUrl('home-cliente');
      break;
      case 'alumno':
        this.router.navigateByUrl('home-alumno');
      break;

    }
  }

  login(){

    if(!this.verificarError()){

      this.dbService.verificarUsuario(this.correo,this.clave).then((user)=>{
        console.log(user);
        localStorage.setItem("user",JSON.stringify(user));
        this.redireccionar(user);

      }).catch((error)=>{
        this.error=true;
        this.mensajeAlert=error;
        this.mostrarAlertDanger=true;
      });
    }

  }




}
