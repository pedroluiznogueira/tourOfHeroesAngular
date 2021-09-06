import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { HEROES } from 'src/app/models/mockHeroes';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
  hero?: Hero | undefined;

  @Input() selectedHeroInput!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
    // boa prática, chamar a função aqui
    this.getHero();
  }

  // preciso de uma função que me retorne um Hero ao comparar o id, diferentemente de getHeroes
  getHero(): void {
    // guardando informações da rota atual
    const routeParams = this.route.snapshot.paramMap;
    // pegando apenas o id atual da rota mapeada acima, e transformando-o de string -> number
    const heroIdFromRoute = Number(routeParams.get('heroId'));

    // guardando o observable que vai ser retornado na requisição
    const observable: Observable<Hero> = this.heroService.getHero(heroIdFromRoute);
    // atribuindo o retorno da requisição ao atributo hero
    observable.subscribe(heroRequested => this.hero = heroRequested);
  }

  // usando a API JS do browser para navegar para a "página" anterior
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

}
