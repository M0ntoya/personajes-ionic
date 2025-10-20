import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private personajes: Personaje[] = [
    { nombre: 'Bruce Wayne', alias: 'Batman', equipo: 'Liga de la Justicia', poderPrincipal: 'Inteligencia', primeraAparicion: '1939' },
    { nombre: 'Clark Kent', alias: 'Superman', equipo: 'Liga de la Justicia', poderPrincipal: 'Superfuerza', primeraAparicion: '1938' },
    { nombre: 'Diana Prince', alias: 'Wonder Woman', equipo: 'Liga de la Justicia', poderPrincipal: 'Fuerza', primeraAparicion: '1941' }
  ];

  getPersonajes() {
    return this.personajes.map(p => ({ nombre: p.nombre, alias: p.alias }));
  }

  getPersonaje(indice: number) {
    return this.personajes[indice];
  }
}
