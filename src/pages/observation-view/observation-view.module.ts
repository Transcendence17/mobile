import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservationViewPage } from './observation-view';
import { DateFormaterPipe } from '../../pipes/date-formater/date-formater';

@NgModule({
  declarations: [
    ObservationViewPage,
    DateFormaterPipe
  ],
  imports: [
    IonicPageModule.forChild(ObservationViewPage),
  ],
})
export class ObservationViewPageModule {}
