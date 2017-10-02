import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunicatonsPage } from './communicatons';

@NgModule({
  declarations: [
    CommunicatonsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunicatonsPage),
  ],
})
export class CommunicatonsPageModule {}
