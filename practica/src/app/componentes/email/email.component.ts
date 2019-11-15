import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  user;
  constructor() {
    
   }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"));
    
  }

}
