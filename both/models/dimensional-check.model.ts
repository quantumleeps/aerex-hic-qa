import { CollectionObject } from './collection-object.model';

export interface DimensionalCheck extends CollectionObject {
    inspectedPart: string;
    drawingDim: string;
    dimTolerance: string;
}
