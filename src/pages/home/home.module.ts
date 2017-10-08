import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { DateFormaterPipe } from '../../pipes/date-formater/date-formater';

@NgModule({
  declarations: [
    HomePage,
    DateFormaterPipe
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
