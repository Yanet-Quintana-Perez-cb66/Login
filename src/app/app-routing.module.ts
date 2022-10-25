import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaComponent } from './ruta/ruta.component';

const routes: Routes = [
  {
    path: 'ruta',
    component: RutaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
