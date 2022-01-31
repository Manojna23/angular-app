import { Injectable } from "@angular/core";
import { IHealthInsurance } from "./health-insurance.model";


@Injectable()
export class HealthInsuranceService {

    memberInsuranceList: IHealthInsurance[] = [];

    constructor() {

    }

    addMember(memberInsurance: IHealthInsurance) {
        this.memberInsuranceList.push(memberInsurance);
    }

    getAllMemberDetails(): IHealthInsurance[] {
        return this.memberInsuranceList;
    }

}