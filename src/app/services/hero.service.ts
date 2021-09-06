import { Injectable } from '@angular/core';
import { Hero } from '../models/Hero';
import { HEROES } from '../models/mockHeroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  // injetando o message service
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient) { }

  // adaptando a função para que retorne um Observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Sucessfully fetched heroes");
    return heroes;
  }

  getHero(heroIdFromRoute: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === heroIdFromRoute)!;
    this.messageService.add(`The hero with id ${heroIdFromRoute} was fetched`);
    
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
