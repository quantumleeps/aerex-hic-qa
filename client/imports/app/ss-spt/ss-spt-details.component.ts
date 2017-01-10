import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';

import { SSSPTRecords } from '../../../../both/collections/ss-spt.collection';
import { SSSPTRecord } from '../../../../both/models/ss-spt-record.model';

import template from './ss-spt-details.component.html';
import style from './ss-spt-details.component.scss';

@Component({
  selector: 'ss-spt-details',
  template,
  styles: [ style ]
})
export class SSSPTDetails implements OnInit, OnDestroy {
  ssSptRecordId: string;
  paramsSub: Subscription;
  ssSptRecord: SSSPTRecord;
  ssSptSub: Subscription;
  
constructor(
      private route: ActivatedRoute
) {}

ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['ss-spt-id'])
      .subscribe(ssSptRecordId => {
        this.ssSptRecordId = ssSptRecordId;

        if (this.ssSptSub) {
          this.ssSptSub.unsubscribe();
          // console.log('it was subscribed')
        }

        this.ssSptSub = MeteorObservable.subscribe('ss-spt-record', this.ssSptRecordId).subscribe(() => {
          this.ssSptRecord = SSSPTRecords.findOne(this.ssSptRecordId);
          // console.log(this.ssSptRecord.client)
        });
      });
  }

  // saveParty() {
  //   if (!Meteor.userId()) {
  //     alert('Please log in to change this party');
  //     return;
  //   }
    
  //   Parties.update(this.party._id, {
  //     $set: {
  //       name: this.party.name,
  //       description: this.party.description,
  //       location: this.party.location
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.ssSptSub.unsubscribe();
  }
}
