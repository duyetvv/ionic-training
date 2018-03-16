import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

// import { Geolocation } from '@ionic-native/geolocation';
// import { NativeGeocoder, NativeGeocoderReverseResult }from '@ionic-native/native-geocoder';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  private keyupTimer:any = null;
  private items:any[];
  private currentItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  private ajustData(data) {
    return data.map((datum) => {
      return {
        [datum.LocalizedName.trim().replace(/ /g, '_')]: {
          Key: datum.Key
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('Items length ', this.items.length);
    console.log(this.http);
  }

  onKeyup (evt) {
    window.clearTimeout(this.keyupTimer);
    this.keyupTimer = window.setTimeout(() => {
      this.autocompletePlaces(evt.target.value);
    }, 180);
  }

  autocompletePlaces (place) {
    this.http
      .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09BmD6kUa1PMpGrJBc3LrgdotxaEiW5na1&q=${place}`)
      .subscribe((res: any[]) => {
        debugger;
        this.items = [].concat(this.ajustData(res));
      }, err => {
        console.log(err);
      })
  }

  onSubmit (evt) {
    console.log(this.currentItem);
    console.log((new FormData(evt.target)).get('location'));
  }

  // searchGeocoder(latlng) {
  //   const { latitude, longitude } = latlng;

  //   this.geocoder.reverseGeocode(latitude, longitude)
  //     .then((results: NativeGeocoderReverseResult) => {
  //       console.log(results);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     })
  // }

  // getGeolocation() {
  //   this.geolocation.getCurrentPosition().then(pos => {
  //     this.searchGeocoder(pos.coords);
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //   })
  // }

}
