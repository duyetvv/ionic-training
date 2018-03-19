import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../entities/hero';
/**
 * Generated class for the DetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {
    console.log('Hello DetailComponent Component');
  }

  ionViewDidLoad() {
    debugger;
  }

  ionViewDidEnter () {
    console.log(this.hero);
    debugger;
  }

  ngOnInit () {

  }
}
