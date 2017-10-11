import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LogicProvider } from '../../providers/logic/logic';
import { Http } from '@angular/http';
/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage 
{ 
  alltasks:any;
  constructor(public logic: LogicProvider,public http : Http) 
  {
    this.getalltasks();
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad TasksPage');
  }
 
  getalltasks()
  {
    this.logic.getAllTasks().subscribe((data) =>{this.alltasks = data.alltasks; console.log(this.alltasks);});
  }

}
