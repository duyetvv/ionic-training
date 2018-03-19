import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeGeocoder }from '@ionic-native/native-geocoder';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrainingPage } from '../pages/training/training';

import { DetailComponent } from '../components/detail/detail';
import { HeroComponent } from '../components/hero/hero';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrainingPage,
    HeroComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrainingPage,
    HeroComponent,
    DetailComponent
  ],
  providers: [
    NativeGeocoder,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    HeroComponent
  ]
})
export class AppModule {}
