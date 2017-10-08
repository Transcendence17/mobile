import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:any = {};
  loading :any;
  constructor(public navCtrl: NavController, public logic: LogicProvider, public navParams: NavParams,public toastCtrl: ToastController,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    console.log(this.user);
    // this.navCtrl.setRoot('MenuPage');
  }
  login_clicked(userpar)
  {
    console.log(userpar)
    this.showLoader();
    this.logic.login(userpar).then(
      (res)=>{
        this.loading.dismiss();
        if(res!='')
        {
          this.user = res;
          console.log(res);
          // localStorage.setItem('id', this.user.User_Id)
          this.navCtrl.setRoot("MenuPage");
        }
        else
        {
           this.showToast("Invalid username or password!");
        }
      },
      (err)=>{
        if(err.status==0)
        {
          this.showToast("No connetion, please check that you are connected");
          this.loading.dismiss();
        }
        else
        {
          this.showToast("Error! "+err);
        }
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
