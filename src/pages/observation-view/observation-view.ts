import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';



@IonicPage()
@Component({
  selector: 'page-observation-view',
  templateUrl: 'observation-view.html',
})
export class ObservationViewPage 
{
  observation: any ;
  complete:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public logic: LogicProvider, public toastCtrl: ToastController) 
  {
    this.observation =   this.navParams.get('observation');   
    this.complete = this.observation.complete; 
  }

  ionViewDidLoad() 
  {

  }
  updateObsevation(id, complete)
  {
    this.logic.updateComplete(id,complete).subscribe(data =>
    {
      if(data.success===true)
      {
         this.presentToast(data.messages);
        console.log(data.success);
      }
      console.log(data);
    });
  }

  presentToast(message) 
  {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present(); 
    toast.onDidDismiss(()=>
    console.log("Toast closed")
  );
  }
}
