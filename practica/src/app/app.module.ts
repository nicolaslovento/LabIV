import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import {FormsModule}   from '@angular/forms';
import { EmailComponent } from './componentes/email/email.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { MiCaptchaComponent } from './componentes/mi-captcha/mi-captcha.component';
import { MiQrComponent } from './componentes/mi-qr/mi-qr.component';
import  {NgxQRCodeModule} from  'ngx-qrcode2';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';
import { AltaMateriaAlumnoComponent } from './componentes/alta-materia-alumno/alta-materia-alumno.component';
import { MateriasAlumnoComponent } from './componentes/materias-alumno/materias-alumno.component' ; 




var firebaseConfig = {
  apiKey: "AIzaSyAZ1CKko6Yd96E653HF4dCymaNjv9phgyg",
  authDomain: "parcial-ecb63.firebaseapp.com",
  databaseURL: "https://parcial-ecb63.firebaseio.com",
  projectId: "parcial-ecb63",
  storageBucket: "parcial-ecb63.appspot.com",
  messagingSenderId: "319062801349",
  appId: "1:319062801349:web:39ea0715d8c0c91a0c69ac"
};



@NgModule({
  declarations: [AppComponent,LoginComponent,HomeComponent,AltaMateriaComponent,RegistroComponent, EmailComponent, ListadoMateriasComponent, ListadoUsuariosComponent, MiCaptchaComponent, MiQrComponent, HomeAlumnoComponent, AltaMateriaAlumnoComponent, MateriasAlumnoComponent ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RecaptchaModule,
    NgxQRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
