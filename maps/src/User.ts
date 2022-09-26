import faker from 'faker';
import { Mappable, Titleable, Contentable } from './CustomMap';
class User implements Mappable, Contentable {
  name: string;
  title: string | undefined;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

export { User };
