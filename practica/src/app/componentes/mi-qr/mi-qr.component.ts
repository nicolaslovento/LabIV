import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mi-qr',
  templateUrl: './mi-qr.component.html',
  styleUrls: ['./mi-qr.component.css']
})
export class MiQrComponent implements OnInit {

  @Input()data;
  miQRdata = null
  constructor() { 
  }

  ngOnInit() {
    console.log(this.data);
    this.miQRdata = JSON.stringify(this.data);
  }
}
