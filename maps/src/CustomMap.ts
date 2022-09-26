import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: { lat: number; lng: number };
}
export interface Titleable {
  title?: string;
}
export interface Contentable {
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, zoomAmt?: number) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: zoomAmt ? zoomAmt : 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable & Titleable & Contentable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      title: mappable.title,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `${mappable.markerContent()}`,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
