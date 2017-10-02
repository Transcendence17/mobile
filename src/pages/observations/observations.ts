import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';
import { ObservationViewPage } from '../observation-view/observation-view'

@IonicPage()
@Component({
  selector: 'page-observations',
  templateUrl: 'observations.html',
})
export class ObservationsPage {
  allobservations : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public logic : LogicProvider) 
  {
    this.allObsevations();
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ObservationsPage');
  }

  public allObsevations()
  {
    this.logic.getAllObsevations().subscribe( data => this.allobservations = data.allobservations);
  }

  openObservation(observation)
  {
    this.navCtrl.push(ObservationViewPage, {observation: observation});
  }
}
