import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattabsPage } from './chattabs';

@NgModule({
  declarations: [
    ChattabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattabsPage),
  ],
})
export class ChattabsPageModule {}
