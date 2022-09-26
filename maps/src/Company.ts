import faker, { fake } from 'faker';
import { Mappable, Titleable, Contentable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  title: string | undefined;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(filtch?: string, XLoc?: { lat: number; lng: number }) {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: XLoc ? XLoc.lat : parseFloat(faker.address.latitude()),
      lng: XLoc ? XLoc.lng : parseFloat(faker.address.longitude()),
    };
    this.title = filtch ? filtch : undefined;
  }

  markerContent(): string {
    return `Company Name: ${this.title ? this.title : this.name}`;
  }
}
