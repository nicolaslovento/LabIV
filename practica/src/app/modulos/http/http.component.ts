import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    
  }

  cargar(){
    const cliente = {cliente: {user: "adrian", pass: "adrian"}};
    this.http.post("http://127.0.0.1:3003/clientes",cliente).subscribe((d)=>{
      console.log(d);
    });
  }

  mostrar(){
    this.http.get("http://127.0.0.1:3003/clientes").subscribe((d:any)=>{
      console.log(d.rta);
    });
  }

  login(){
    const cliente = {cliente: {user: "adrian", pass: "adrian"}};
    this.http.post("http://127.0.0.1:3003/login",cliente).subscribe((d:any)=>{
      localStorage.setItem('token',JSON.stringify(d.token));
    });
  }

  cargarAuto(){
    const httpOptions = {
      //falta decode de jwt
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'token': localStorage.getItem('token')
     })};

    const auto = {auto: {marca: "fiat", color: "rojo"}};
    this.http.post("http://127.0.0.1:3003/auto",auto,httpOptions).subscribe((d)=>{
      console.log(d);
    });
  }

}
