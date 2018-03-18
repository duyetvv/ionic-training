import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  private keyupTimer:any = null;
  items: any[];
  curItem: any = {
    value: '',
    key: ''
  };

  weather: any = null;

  constructor(public navCtrl: NavController, private http: HttpClient) {}

  private ajustData(data) {
    return data.map((datum) => {
      return {
        value: datum.LocalizedName,
        key: datum.Key
      }
    });
  }

  autocompletePlaces (place:string) {
    this.http
      .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=BmD6kUa1PMpGrJBc3LrgdotxaEiW5na1&q=${place}`)
      .subscribe((res: any[]) => {
        this.items = [].concat(this.ajustData(res));
      }, err => {
        console.log(err);
      })
  }

  getCurAccuWeather() {
    if (!this.curItem.key.length) { return };
    
    this.http
      .get(`http://dataservice.accuweather.com/currentconditions/v1/${this.curItem.key}?apikey=BmD6kUa1PMpGrJBc3LrgdotxaEiW5na1`)
      .subscribe((res: any[]) => {
        let datum = res[0];

        this.weather = {
          icon: `/assets/icon/${datum.WeatherIcon}-s.png`,
          title: datum.WeatherText,
          temperature: datum.Temperature.Metric.Value
        };
      }, err => {
        console.log(err);
      });
  }

  onKeyup (evt) {
    window.clearTimeout(this.keyupTimer);

    this.keyupTimer = window.setTimeout(() => {
      this.autocompletePlaces(evt.target.value);
    }, 180);
  }

  onAcItemClick(item) {
    this.curItem = item;
    console.log(item);
    this.getCurAccuWeather();
  }

  onSubmit (evt) {
    evt.prevenDefault();
    if (this.weather) {
      return;
    }
    this.getCurAccuWeather()
  }
}
