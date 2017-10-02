import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservationsPage } from './observations';
import { DateFormaterPipe } from '../../pipes/date-formater/date-formater';


@NgModule({
  declarations: [
    ObservationsPage,
    DateFormaterPipe
  ],
  imports: [
    IonicPageModule.forChild(ObservationsPage),
  ],
})
export class ObservationsPageModule {}
