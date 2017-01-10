import { SSSPTRecords } from '../../../both/collections/ss-spt.collection';
import { SSSPTRecord } from '../../../both/models/ss-spt-record.model';

export function loadSSSPTRecords() {
  if (SSSPTRecords.find().cursor.count() === 0) {
    const ssSptRecords: SSSPTRecord[] = [{
      client: 'CWater',
      notes: 'Can we please just for an evening not listen to dubstep.',
      public: true
    }];

    ssSptRecords.forEach((ssSptRecord: SSSPTRecord) => SSSPTRecords.insert(ssSptRecord));
  }
}