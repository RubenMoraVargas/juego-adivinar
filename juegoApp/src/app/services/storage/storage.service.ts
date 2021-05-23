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
} 