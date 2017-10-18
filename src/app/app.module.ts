import { MyApp } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgCalendarModule } from "ionic2-calendar";
import { IonicModule, IonicApp, IonicErrorHandler } from "ionic-angular";
import { HttpModule } from "@angular/http";
import { StatusBar } from "@ionic-native/status-bar";
import { ErrorHandler, NgModule } from "@angular/core";
import { LogicProvider } from "../providers/logic/logic";
//import { BackgroundGeolocation } from "@ionic-native/background-geolocation";
import { LocationTracker } from "../providers/location-tracker/location-tracker";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp
   ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    ],
  providers: [
    StatusBar,
    SplashScreen,
    // LocationTracker,
    //BackgroundGeolocation,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LogicProvider,
  ]
})
export class AppModule {}
