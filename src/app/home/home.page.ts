import { Component } from '@angular/core';

declare var HMSMap: any;
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: any;
  constructor() {
    document.addEventListener('deviceready', async () => {
      await HMSMap.init();
      this.createMapView();
    });

  }

  async createMapView() {
    const mapInstance = await HMSMap.create('my-map-view', {
      myLocationEnabled: true,
      minZoomPreference: 4,
      maxZoomPreference: 8,
      cameraPosition: {
          target: {lat: 39.707187, lng: 37.530353},
          zoom: 7
      }
  });
}


}
