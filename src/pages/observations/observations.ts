import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';
import { ObservationViewPage } from '../observation-view/observation-view'

@IonicPage()
@Component({
  selector: 'page-observations',
  templateUrl: 'observations.html',
})
export class ObservationsPage 
{
  allobservations : any = new Array();
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
    this.logic.getAllObsevations().subscribe( data => { console.log(data);
      for(var x =0; x< data.allobservations.length; x++ )
      {
        if(parseInt(data.allobservations[x].complete)< 100)
        {
          this.allobservations.push(data.allobservations[x]);
          console.log(data.allobservations[0]);
        }
      }
      // console.log(data.allobservations[0]);
    });
  }

  openObservation(observation)
  {
    this.navCtrl.push(ObservationViewPage, {observation: observation});
  }
}
