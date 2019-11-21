import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  user;
  constructor(private router:Router) {
    
   }

  ngOnInit() {
   setInterval(()=>{
    this.user=JSON.parse(localStorage.getItem("user"))
   },1000);
      
  }

  desloguear(){
    localStorage.clear();
    this.user=null;
    this.router.navigateByUrl('');
    
   
  }

}
