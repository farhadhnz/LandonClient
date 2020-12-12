import { Province } from './../province/province';
export class City {
    constructor(name : string) {
        this.name = name;

    }
    name: string;
    provinceId: string;
    province:Province;
}
