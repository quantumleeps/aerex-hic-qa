import { CollectionObject } from './collection-object.model';

export interface Material extends CollectionObject {
    quantity: number;
    serialNumber: string;
    description: string;
}
