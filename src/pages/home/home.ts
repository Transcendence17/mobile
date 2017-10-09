import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';
import { TrainingPage } from '../training/training';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  trainings:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public logic: LogicProvider) {
    this.getallTrainings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getallTrainings()
  {
    this.logic.getAllTrainings().subscribe((data)=>{
      console.log(data.trainings);
      this.trainings = data.trainings;
    });
  }

  openTraining(trainingpar)
  {
    this.navCtrl.push(TrainingPage,{training: trainingpar})
  }

}
