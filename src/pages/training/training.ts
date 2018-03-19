import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  data: any = {
    pagename: ''
  };
  pageName: 'value';
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
    setTimeout(() => {
      this.data = {
        pagename: 'Training Page',
        detail: 'Page for training',
        parent: 'app component',
        child: 'No child',
        properties: '',
        events: '',
        twoway: ''
      }
    }, 3000);
  }

  public callFax(value) {
    console.log(value);
  }

  onSubmit (fDemo) {
    console.log(fDemo.value);
  }
}
