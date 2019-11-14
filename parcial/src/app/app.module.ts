import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import {NgbModule, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { LoginComponent } from './componentes/login/login.component';

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
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    //NgbModule,
    //NgbAlert
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
