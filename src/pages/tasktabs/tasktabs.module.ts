import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasktabsPage } from './tasktabs';

@NgModule({
  declarations: [
    TasktabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TasktabsPage),
  ],
})
export class TasktabsPageModule {}
