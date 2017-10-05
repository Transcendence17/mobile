import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //geolocation
    constructor(private backgroundGeolocation: BackgroundGeolocation) { }

    const config: BackgroundGeolocationConfig = {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                debug: true, //  enable this hear sounds for background-geolocation life-cycle.
                stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        };

    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {

        console.log(location);

        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        this.backgroundGeolocation.finish(); // FOR IOS ONLY

      });

    // start recording location
    this.backgroundGeolocation.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    this.backgroundGeolocation.stop();
    //end geolocation

  }
}
