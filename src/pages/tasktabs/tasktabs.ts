import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TasktabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasktabs',
  templateUrl: 'tasktabs.html',
})
export class TasktabsPage {
  
  calendarRoot= 'CtaskPage';
  mapRoot= 'MtaskPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasktabsPage');
  }

}
