import { Component, OnInit } from '@angular/core';
import { Hero } from '../../entities/hero';
import { HEROES } from '../../virtualdata/heroes';
/**
 * Generated class for the HeroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero',
  templateUrl: 'hero.html'
})

export class HeroComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log('HeroComponent', this.heroes);
  }

  ngOnInit () {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
