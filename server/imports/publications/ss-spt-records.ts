import { Meteor } from 'meteor/meteor';
import { SSSPTRecords } from '../../../both/collections/ss-spt.collection';

Meteor.publish('ss-spt-records', function () {
      return SSSPTRecords.find(buildQuery.call(this));
});

Meteor.publish('ss-spt-record', function(recordId: string) {
  return SSSPTRecords.find(buildQuery.call(this, recordId));
});


function buildQuery(recordId?: string): any {
  const isAvailable = {}

  if (recordId) {
    //   console.log('yes there was an id')
    return {
      // only single party
      $and: [{
          _id: recordId
        },
        isAvailable
      ]
    };
  }
  console.log(isAvailable)
  return isAvailable;

}