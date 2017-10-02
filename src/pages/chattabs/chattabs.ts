import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chattabs',
  templateUrl: 'chattabs.html',
})
export class ChattabsPage 
{
  chatRoot= 'ChatsPage';
  listRoot= 'AllemployeesPage';
  myIndex: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChattabsPage');
  }

}
