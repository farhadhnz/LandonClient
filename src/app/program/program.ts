import { University } from './../university/university';
export class Program {
    constructor(name : string) {
        this.name = name;

    }
    name: string;
    universityId: string;
    university:University;
}
