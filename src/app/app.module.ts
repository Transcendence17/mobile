import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule } from 'ionic2-calendar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LogicProvider } from '../providers/logic/logic';
import { DateFormaterPipe } from '../pipes/date-formater/date-formater';
import { ObservationViewPage } from '../pages/observation-view/observation-view';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
//import { LocationPage } from '../pages/location/location';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ObservationViewPage,
   ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocationTracker,
    BackgroundGeolocation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogicProvider,
  ]
})
export class AppModule {}
