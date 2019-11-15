import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mi-captcha',
  templateUrl: './mi-captcha.component.html',
  styleUrls: ['./mi-captcha.component.css']
})
export class MiCaptchaComponent implements OnInit {
  @Output()verificar = new EventEmitter<any>();
  
  constructor() { }
   
  ngOnInit() {
  }
  resolved(event){
    this.verificar.emit(event);
  }

}
