import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  training:any={};
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController ,public toastCtrl: ToastController, public logic : LogicProvider) {
    this.training = navParams.get('training');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }

  apply(id)
  {
    let employeeTraining ={username:"", password:""};
    let employee:any = localStorage.getItem('userLocal');
    employeeTraining = JSON.parse(employee);
    console.log(id);
    console.log(employeeTraining.username);
    this.logic.apply(id,employeeTraining.username).then((res)=>{
      this.showLoader();
      this.showToast(res)
      console.log(res);
      this.loading.dismiss();
    });
  }

  showToast(msg)
  {
      let toast =this.toastCtrl.create(
      {
        message: msg,
        duration:3000,
        position:'bottom',
        dismissOnPageChange:true
      });

      toast.onDidDismiss(()=>{
        console.log("Toas dismised");
      });
      toast.present();
  }

  showLoader()
  {
    this.loading =this.loadingCtrl.create({content:'Please wait...'});
    this.loading.present();
  }


}
