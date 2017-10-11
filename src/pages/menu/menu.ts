import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {

  rootPage:any = 'HomePage';

  @ViewChild(Nav) nav: NavController;

  pages: PageInterface[] =[
    {title: 'Home', pageName: 'HomePage', icon: 'home'  },// Home Page
    {title: 'Chats', pageName: 'ChattabsPage', tabComponent: 'ChatsPage', index: 0, icon: 'chatbubbles'  },// Chats Page
    {title: 'All Tasks', pageName: 'TasksPage', icon: 'list'  },// Task Page
    {title: 'Observations', pageName: 'ObservationsPage', icon: 'eye'  },// Task Page
    {title: 'My Task', pageName: 'TasktabsPage', tabComponent: 'TasksPage', index: 0, icon: 'build'  },// Location
    {title: 'Geolocation', pageName: 'LocationPage', icon: 'md-globe'  },
    {title: 'Profile', pageName: 'ProfilePage',icon: 'person'  },// Profile
    {title: 'Settings', pageName: 'SettingsPage', icon: 'cog'  },// Settings
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  openPage(p: PageInterface)
  {
    let params = {};
    if(p.index)
    {
      params= {tabIndex: p.index}
    }

    if(this.nav.getActiveChildNav() && p.index != undefined)
    {
      this.nav.getActiveChildNav().select(p.index);
      this.nav.setRoot(p.pageName);
    }
    else
    {
      this.nav.setRoot(p.pageName);
    }
  }

  isActive(p: PageInterface)
  {

  }

}
