import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  public getPuntaje() {
    const puntajeAsString = localStorage.getItem('puntaje');
    if (puntajeAsString) {
      return parseInt(puntajeAsString);
    } else {
      return 0;
    }
  }
  public setPuntaje(puntaje: number) {
    localStorage.setItem('puntaje', puntaje.toString());
  }
  public getNombreJugador() {
    return localStorage.getItem('nombre-jugador');
  }
  public setNombreJugador(nombreJugador: string) {
    localStorage.setItem('nombre-jugador', nombreJugador);
  }
}
