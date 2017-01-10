import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { SSSPTRecord } from '../models/ss-spt-record.model';

export const SSSPTRecords = new MongoObservable.Collection<SSSPTRecord>('ss-spt-records');

function loggedIn() {
  return !!Meteor.user();
}

SSSPTRecords.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
