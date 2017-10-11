import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservationsPage } from './observations';

@NgModule({
  declarations: [
    ObservationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservationsPage),
  ],
})
export class ObservationsPageModule {}
