import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import { SSSPTDetails } from './ss-spt/ss-spt-details.component';
import { SSSPTList } from './ss-spt/ss-spt-list.component';

export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'hic/ss-spt', component: SSSPTDetails },
  { path: 'hic/ss-spt-list', component: SSSPTList },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
