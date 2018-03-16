import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { AddItemPage } from '../add-item/add-item';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToWeatherPage(evt) {
    console.log('button click');
    this.navCtrl.push(WeatherPage);
  }

}
