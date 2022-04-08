import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo:'nosotros', pathMatch: 'full' },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', component: NosotrosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
