import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

// import { Parties } from '../../../../both/collections/parties.collection';
// import { Party } from '../../../../both/models/party.model';

import template from './ss-spt.component.html';
import style from './ss-spt.component.scss';

@Component({
  selector: 'ss-spt',
  template,
  styles: [ style ]
})
export class SSSPT implements OnInit, OnDestroy {
  // parties: Observable<Party[]>;
  // // partiesSub: Subscription;

  ngOnInit() {

  }
  // ngOnInit() {
  //   this.parties = Parties.find({}).zone();
  //   this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
  // }

  // removeParty(party: Party): void {
  //   Parties.remove(party._id);
  // }

  // search(value: string): void {
  //   this.parties = Parties.find(value ? { location: value } : {}).zone();
  // }

  ngOnDestroy() {
    
  }
  // ngOnDestroy() {
  //   this.partiesSub.unsubscribe();
  // }
}
