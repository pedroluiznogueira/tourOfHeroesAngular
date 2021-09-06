import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HEROES } from 'src/app/models/mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero!: Hero;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSelectHero(hero: Hero): boolean {
    this.selectedHero = hero;
    
    return true;
  }
}
