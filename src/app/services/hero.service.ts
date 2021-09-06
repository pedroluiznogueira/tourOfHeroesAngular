import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/mockHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
