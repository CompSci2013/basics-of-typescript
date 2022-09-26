import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map', 2);
const user = new User();
user.title = 'slurpy master';
const company = new Company('Potoato Salad');
const company2 = new Company();
company2.title = 'zod the merciless';
const company3 = new Company();
//customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(company2);
customMap.addMarker(company3);
// customMap.addMarker(new Company());
// for (let idx: number = 0; idx > 125; idx--) {
//   customMap.addMarker(new User());
// }
