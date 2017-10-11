import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservationViewPage } from './observation-view';

@NgModule({
  declarations: [
    ObservationViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservationViewPage),
  ],
})
export class ObservationViewPageModule {}
