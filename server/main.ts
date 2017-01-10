import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';
import { loadSSSPTRecords } from './imports/fixtures/ss-spt-records';

import './imports/publications/parties'; 
import './imports/publications/ss-spt-records';

Meteor.startup(() => {
  loadParties();
  loadSSSPTRecords();
});
