import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { IEmployee } from "./employeeDetails.model";

@Injectable()
export class EmployeeDetailsService {

    employee: IEmployee;

    constructor() {
        this.employee = {
            name: 'Manojna Vijayakrishna',
            age: 27,
            maritalStatus: 'Married'
        };
    }

    getEmployee(employeeId: number) {
        return this.employee;
    }
}