import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CtaskPage } from './ctask';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  declarations: [
    CtaskPage,
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CtaskPage),
  ],
})
export class CtaskPageModule {}
