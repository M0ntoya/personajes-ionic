import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPersonajesPage } from './lista-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPersonajesPageRoutingModule {}
