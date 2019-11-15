import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import * as jsPDF from 'jspdf';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  
  usuarios=new Array();
  tipo="";
  constructor(
    private serviceFirestore:FirebaseService,
    private router:Router) { }

  ngOnInit() {

    
  }

async cargarUsuarios(tipo){
  
    this.usuarios=[];
    await this.serviceFirestore.traerUsuariosPorTipo(this.tipo).then((usuarios:any)=>{
      
      this.usuarios=usuarios;
    });
    
  }
  

  


  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('datosTabla.pdf');
  }

  generadorCSV(){
    var data = [
      {
        name: 'Test 1',
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 2',
        age: 11,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
      {
        name: 'Test 4',
        age: 10,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },
    ];
     
      const options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'My Awesome CSV',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
        // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
      };
     
    const csvExporter = new ExportToCsv(options);
    
    csvExporter.generateCsv(this.usuarios);
  }

}
