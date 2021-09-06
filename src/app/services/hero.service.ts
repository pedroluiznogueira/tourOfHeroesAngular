import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/mockHeroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // adaptando a função para que retorne um Observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
