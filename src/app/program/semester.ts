import { Program } from './program';
export class Semester {
    constructor(name : string) {
        this.name = name;

    }
    name: string;
    programId: string;
    program:Program;
    deadline:Date;
    season:string;
}
