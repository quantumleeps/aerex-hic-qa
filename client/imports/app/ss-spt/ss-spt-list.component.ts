import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { SSSPTRecords } from '../../../../both/collections/ss-spt.collection';
import { SSSPTRecord } from '../../../../both/models/ss-spt-record.model';

import template from './ss-spt-list.component.html';
// import style from './ss-spt-list.component.scss';

@Component({
  selector: 'ss-spt-list',
  template
//   styles: [ style ]
})
export class SSSPTList implements OnInit, OnDestroy {
  ssSptRecords: Observable<SSSPTRecord[]>;
  ssSptSub: Subscription;

  ngOnInit() {
    this.ssSptRecords = SSSPTRecords.find({}).zone();
    this.ssSptSub = MeteorObservable.subscribe('ss-spt-records').subscribe();
  }
  // removeParty(party: Party): void {
  //   Parties.remove(party._id);
  // }

  // search(value: string): void {
  //   this.parties = Parties.find(value ? { location: value } : {}).zone();
  // }

  ngOnDestroy() {
    this.ssSptSub.unsubscribe();
  }
}
