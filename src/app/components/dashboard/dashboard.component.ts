import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  
  getHeroes() {
    let observable: Observable<Hero[]> = this.heroService.getHeroes();
    // limitando ao array na requisição
    observable.subscribe(heroesRequested => this.heroes = heroesRequested.slice(3, 7));
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
}
