import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MtaskPage } from './mtask';

@NgModule({
  declarations: [
    MtaskPage
  ],
  imports: [
    IonicPageModule.forChild(MtaskPage),
  ],
})
export class MtaskPageModule {}
