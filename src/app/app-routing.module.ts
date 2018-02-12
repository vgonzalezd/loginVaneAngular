import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtraPaginaComponent } from './otra-pagina/otra-pagina.component';

const miConstante: Routes = [
  { path: 'miDireccion', component: OtraPaginaComponent},
];
// no olvidar exportarlo para que lo vean
@NgModule({
  imports: [RouterModule.forRoot(miConstante)],
  exports: [RouterModule]
})

export class MiModuloDeRuteo { }
