import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';







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
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
