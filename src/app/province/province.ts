import { Country } from '../country/country';

export class Province {
    /**
     *
     */
    constructor(name : string) {
        this.name = name;

    }
    name: string;
    countryId: string;
    country:Country;
}
