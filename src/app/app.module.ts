import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { HorariosComponent } from './horarios/horarios.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { CrearExcepcionDialogComponent } from './nosotros/crear-excepcion-dialog/crear-excepcion-dialog.component';
import { ExcepcionesFuturasDialogComponent } from './nosotros/excepciones-futuras-dialog/excepciones-futuras-dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ContactosComponent,
    HorariosComponent,
    CrearExcepcionDialogComponent,
    ExcepcionesFuturasDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
