import { City } from './../city/city';
export class University {
    constructor(name : string) {
        this.name = name;

    }
    name: string;
    cityId: string;
    city:City;
}
