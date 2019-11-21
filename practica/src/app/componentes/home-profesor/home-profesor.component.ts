import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.component.html',
  styleUrls: ['./home-profesor.component.css']
})
export class HomeProfesorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
