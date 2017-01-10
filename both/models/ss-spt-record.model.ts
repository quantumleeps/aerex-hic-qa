import { CollectionObject } from './collection-object.model';
import { WeldingWire } from './welding-wire.model';
import { VisualExam } from './visual-exam.model';
import { PenetrantExam } from './penetrant-exam.model';
import { HydrostaticExam } from './hydrostatic-exam.model';
import { DimensionalExam } from './dimensional-exam.model';
import { WeldMap } from './weld-map.model';

export interface SSSPTRecord extends CollectionObject {
    client: string;
    clientPONum: string;
    itemDescrip: string;
    clientDrawNum: string;
    clientDrawRev: string;
    clientSpecNum: string;
    clientSpecRev: string;
    aerexDrawNum: string;
    aerexDrawRev: string;
    aerexSpecNum: string;
    aerexSpecRev: string;
    serialNum: string;
    weldingWires: WeldingWire[];
    visualExamResult: VisualExam;
    penetrantExamResult: PenetrantExam;
    hydrostaticExamResult: HydrostaticExam;
    dimensionalExamResult: DimensionalExam;
    weldMaps: WeldMap[]
    notes: string;
    qcAcceptanceSig: string;
    qcAcceptanceDate: string;
}
