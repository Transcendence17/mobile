import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-ctask',
  templateUrl: 'ctask.html',
})

export class CtaskPage 
{
  eventSource =[ 
    { title:"Nhlaka event", startTime: new Date("23-09-2017 09:00:00"), endTime:new Date("23-09-2017 12:00:00") },
    { title:"Survey event", startTime: new Date("26-09-2017 09:00:00"), endTime:new Date("26-09-2017 12:00:00" )},
    { title:"Project Event", startTime:new Date( "28-09-2017 09:00:00"), endTime:new Date("28-09-2017 12:00:00") },
    { title:"The last Test", startTime: new Date("26-09-2017 09:00:00"), endTime:new Date("26-09-2017 12:00:00") },
  ];
  viewTitle: string;
  selectedDay = new Date();

  calendar ={
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) 
  {

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CtaskPage');
  }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();


    modal.onDidDismiss(data => {
      if (data) {

        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
