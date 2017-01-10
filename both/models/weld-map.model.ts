import { CollectionObject } from './collection-object.model';

export interface WeldMap extends CollectionObject {
    name: string;
    fitUpBool: boolean;
    rootPassBool: boolean;
    hotPassBool: boolean;
    finalWeldBool: boolean;
    visExamInProcess: boolean;
    visExamFinal: boolean;
    penExamPre: boolean;
    penExamPost: boolean;
    loadTestExam: boolean;
    welderStampNum: string;
    remarks: string;
}
