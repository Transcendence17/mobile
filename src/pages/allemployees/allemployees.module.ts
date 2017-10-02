import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllemployeesPage } from './allemployees';

@NgModule({
  declarations: [
    AllemployeesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllemployeesPage),
  ],
})
export class AllemployeesPageModule {}
