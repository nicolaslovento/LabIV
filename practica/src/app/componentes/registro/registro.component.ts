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
  mostrarAlertSuccess=false;
  mostrarAlertDanger=false;
  mensajeAlert="";
  captcha=null;
  mostrarQR=true;
  entidad:any={nombre:"nicolas"};
  mostrarQr=false;
  constructor(
    public router:Router,
    private dbService:FirebaseService
  ) { }

  ngOnInit() {
  }

  registrar(){


    if(!this.verificarError()){

      let existe=false;
      let usuarioNuevo={
        correo:this.correo,
        clave:this.clave,
        tipo:this.tipo
      }

      this.dbService.verificarSiNoExiste(usuarioNuevo.correo,usuarioNuevo.clave).then(()=>{

        this.dbService.cargarUsuario(usuarioNuevo).then(()=>{
          
          this.mensajeAlert="Se registró con éxito";
          this.mostrarAlertSuccess=true;
          setTimeout(()=>{
            
            this.entidad=usuarioNuevo;
            this.mostrarQr=true;
            
          },3000);

          
        })

      }).catch(()=>{

        this.mostrarAlertDanger=true;
        this.mensajeAlert="El usuario ya existe";
        existe=true;

      })

      
      
    }
  }

  verificar(e){
    if(e!=null){
      this.captcha=e;
    }else{
      this.captcha=null;
    }
  }

  verificarError(){

    let errores=0;
    let vacios=0;

    if(this.captcha==null){
      this.mensajeAlert="Debe hacer el captcha";
      errores++;
    }

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

}
