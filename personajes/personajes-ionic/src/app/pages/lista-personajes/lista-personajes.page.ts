import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.page.html',
  styleUrls: ['./lista-personajes.page.scss'],
})
export class ListaPersonajesPage implements OnInit {

  personajes: any[] = [];

  constructor(private personajeService: PersonajeService, private router: Router) {}

  ngOnInit() {
    this.personajes = this.personajeService.getPersonajes();
  }

  verDetalle(indice: number) {
    this.router.navigate(['/detalle-personaje', indice]);
  }
}
