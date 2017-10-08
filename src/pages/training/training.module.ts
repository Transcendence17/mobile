import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingPage } from './training';
import { DateFormaterPipe } from '../../pipes/date-formater/date-formater';

@NgModule({
  declarations: [
    TrainingPage,
    DateFormaterPipe
  ],
  imports: [
    IonicPageModule.forChild(TrainingPage),
  ],
})
export class TrainingPageModule {}
