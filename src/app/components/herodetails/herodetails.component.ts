import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {

  @Input() selectedHeroInput!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
