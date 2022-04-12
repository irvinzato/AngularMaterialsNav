import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { CrearExcepcionDialogComponent } from './crear-excepcion-dialog/crear-excepcion-dialog.component';
import { ExcepcionesFuturasDialogComponent } from './excepciones-futuras-dialog/excepciones-futuras-dialog.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor(private matDialog: MatDialog) {

   }

  ngOnInit() {
  }

  openDialog(){
    console.log("Usaremos dialogos ! wiiii");
    this.matDialog.open(CrearExcepcionDialogComponent,{
      
    });
  }


  openDialogExcepcionesFuturas(){
    this.matDialog.open(ExcepcionesFuturasDialogComponent,{
      height: '409px',
      width: '422px'
    });
  }

}
