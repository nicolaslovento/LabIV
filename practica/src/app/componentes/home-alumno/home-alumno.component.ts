import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.component.html',
  styleUrls: ['./home-alumno.component.css']
})
export class HomeAlumnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
