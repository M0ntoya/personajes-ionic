import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPersonajesPageRoutingModule } from './lista-personajes-routing.module';

import { ListaPersonajesPage } from './lista-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPersonajesPageRoutingModule
  ],
  declarations: [ListaPersonajesPage]
})
export class ListaPersonajesPageModule {}
