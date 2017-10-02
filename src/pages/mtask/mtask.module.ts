import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MtaskPage } from './mtask';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MtaskPage
  ],
  imports: [
    IonicPageModule.forChild(MtaskPage),
  ],
})
export class MtaskPageModule {}
