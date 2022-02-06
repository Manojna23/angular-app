import { Injectable } from "@angular/core";

@Injectable()
export class PerksService{

    perksList: string[] = [];

    constructor() {
        this.addPerks();
    }

    addPerks() {
        this.perksList = [
            'Order Pizza',
            'Free Cab Service',
            'Entertainment',
            'Discount on Electronics',
            'Medical benefits'
        ];
    }

    getPerks() {
        return this.perksList;
    }
}