import { DimensionalCheck } from './dimensional-check.model';

export interface DimensionalExam {
    procedureNum: string;
    procedureRev: string;
    dimensionalChecks: DimensionalCheck[];
}
