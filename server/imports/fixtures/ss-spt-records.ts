import { SSSPTRecords } from '../../../both/collections/ss-spt.collection';
import { SSSPTRecord } from '../../../both/models/ss-spt-record.model';

export function loadSSSPTRecords() {
  if (SSSPTRecords.find().cursor.count() === 0) {
    const ssSptRecords: SSSPTRecord[] = [{
      client: 'CWater',
      clientPONum: 'NAS-15032',
      itemDescrip: 'This is the part for the top of the thing',
      clientDrawNum: 'DWG-350-1',
      clientDrawRev: 'A',
      clientSpecNum: 'ASTM-4516',
      clientSpecRev: '2008',
      aerexDrawNum: '12-4502',
      aerexDrawRev: '1',
      aerexSpecNum: 'ASTM-4516',
      aerexSpecRev: '2009',
      serialNum: '2454242',
      materials: [{
        quantity: 23,
        serialNumber: '2029s92-03',
        description: 'SAF2507 Cap'
      }, {
        quantity: 253,
        serialNumber: '2029s92-04',
        description: 'SAF2507 Elbow'
      }],
      weldingWires: [{
        welderNum: '0235',
        heatNum: 'A324'
      }, {
        welderNum: '0235',
        heatNum: 'A325'
      }],
      visualExamResult: {
        procedureNum: '24A',
        procedureRev: '2',
        acceptanceCode: '34b'
      },
      penetrantExamResult: {
        procedureNum: '22A',
        procedureRev: '3',
        acceptanceCode: '4b'
      },
      hydrostaticExamResult: {
        procedureNum: '22A',
        procedureRev: '3',
        acceptanceCode: '4b',
        designPressure: 1200,
        designTemperature: 280,
        testDuration: 42
      },
      loadTestExamResult: {
        procedureNum: '2204A243',
        procedureRev: '33',
        acceptanceCode: '44b',
        designLoad: 12004,
        testDuration: 42
      },
      dimensionalExamResult: {
        procedureNum: '402D',
        procedureRev: '0',
        dimensionalChecks: [{
          inspectedPart: '324-2003',
          drawingDim: '4',
          dimTolerance: '+/- 0.25'
        }, {
          inspectedPart: '324-2004',
          drawingDim: '5',
          dimTolerance: '+/- 0.25'
        }]
      },
      weldMaps: [{
        name: 'weld123',
        fitUpBool: true,
        rootPassBool: true,
        hotPassBool: true,
        finalWeldBool: true,
        visExamInProcess: true,
        visExamFinal: true,
        penExamPre: true,
        penExamPost: true,
        loadTestExam: true,
        welderStampNum: 'Bill0324',
        remarks: 'Root target hit'
      }, {
        name: 'weld124',
        fitUpBool: true,
        rootPassBool: true,
        hotPassBool: false,
        finalWeldBool: false,
        visExamInProcess: true,
        visExamFinal: true,
        penExamPre: true,
        penExamPost: false,
        loadTestExam: false,
        welderStampNum: 'Bob2345',
        remarks: 'Root target not hit'
      }],
      notes: 'No significant deviations from expectations.',
      qcAcceptanceSig: 'Thomas Donnick',
      qcAcceptanceDate: '2016-10-24',
      public: true
    }];

    ssSptRecords.forEach((ssSptRecord: SSSPTRecord) => SSSPTRecords.insert(ssSptRecord));
  }
}