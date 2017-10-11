import { Component } from '@angular/core';
import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  /*Direction service*/
  Start: any;
  End : any;
  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {

  }
  calculateAndDisplayRoute() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 41.85, lng: -87.65}
    });
directionsDisplay.setMap(map);
  directionsService.route({
    origin: this.Start,
    destination: this.End,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }
}
