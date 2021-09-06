import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // array de heroes vazio enquanto não recebeu os dados
  heroes: Hero[] = [];
  selectedHero!: Hero;

  // injetando o Hero Service
  constructor(private heroService: HeroService) { 
  }

  
  onSelectHero(hero: Hero): boolean {
    this.selectedHero = hero;
    
    return true;
  }
  
  getHeroes() {
    // passando os heroes para o heroes array por meio da requisição do Hero Service
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    // é uma boa prática chamar essa função aqui
    this.getHeroes();
  }
}
