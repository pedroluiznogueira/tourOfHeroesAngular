import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  // injetando o Hero Service
  constructor(private heroService: HeroService) { 
  }

  getHeroes(): void {
    // recebe o observable e espera a resposta do remote server com os dados
    let observable: Observable<Hero[]> = this.heroService.getHeroes()
    // assim que a requisição tiver sucesso, executa a callback, atribuindo à "this.heroes" o retorno "heroes" de getHeroes() do serviço
    observable.subscribe(heroesRequested => this.heroes = heroesRequested);
  }

  ngOnInit(): void {
    // é uma boa prática chamar essa função aqui
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
