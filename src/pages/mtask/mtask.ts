import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-mtask',
  templateUrl: 'mtask.html',
})
export class MtaskPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel : ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MtaskPage');
    this.loadMap();
    this.startNavigating();
  }
  loadMap()
  {
    this.geolocation.getCurrentPosition().then((position)=>{
      let latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      
          let mapOptions = {
            center :latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (error) =>{
      console.log(error);
    });


    console.log("map")
  }

  addMarker(){
    
     let marker = new google.maps.Marker({
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: this.map.getCenter()
     });
    
     let content = "<h4>Information!</h4><br> This is employee task tesing";         
    
     this.addInfoWindow(marker, content);
    
   }

   addInfoWindow(marker, content){
     let infoWindow = new google.maps.InfoWindow({
       content: content
     });
    
     google.maps.event.addListener(marker, 'click', () => {
       infoWindow.open(this.map, marker);
     });
   }

   startNavigating()
   {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);
      
      this.geolocation.getCurrentPosition().then((position)=>{

      directionsService.route(
        {
          origin: {lat: position.coords.latitude, lng: position.coords.longitude},
          destination: {lat:-29.333, lng: 31.009016},
          travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => 
      {
          if(status == google.maps.DirectionsStatus.OK)
          {
              directionsDisplay.setDirections(res);
          } 
          else 
          {
              console.warn(status);
          }
      });
   }, (error)=>{
     console.warn(error)
   })
  }

}
