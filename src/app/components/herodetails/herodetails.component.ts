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
  hero: Hero | undefined;

  @Input() selectedHeroInput!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
      // pegando as características da route atual
      const routeParams = this.route.snapshot.paramMap; 
      // pegando a informação da rota atual que seja um (heroId == hero.id, vindo do html) e passando de string para number 
      const heroIdFromRoute = Number(routeParams.get('heroId'));
  
      // procutando no HEROES array um hero que tenha o id igual ao id atual (heroIdFromRoute)
      this.hero = <Hero>HEROES.find(hero => hero.id === heroIdFromRoute);
  }

}
