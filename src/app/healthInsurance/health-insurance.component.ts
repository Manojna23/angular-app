import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentComponent } from "./enrollement/enrollment.component";
import { IHealthInsurance } from "./health-insurance.model";
import { HealthInsuranceService } from "./health-insurance.service";

@Component({
    selector: './health-insurance',
    templateUrl: './health-insurance.component.html',
    styleUrls:['./health-insurance.component.css']
})
export class HealthInsuranceComponent {
    
    pageTitle: string = 'Health and Insurance';
    employeeN: string = 'Manojna Vk';
    popUpOpen = true;
    insuranceDetailsForDisplay: IHealthInsurance[]=[];
    insuranceDetails: IHealthInsurance[]=[];
    // insuranceDetails: IHealthInsurance[] = [
    //     {
    //         name:'Suchitra Rao',
    //         age:35,
    //         relationship:'self',
    //         insuredAmount:400000,
    //         startDate:'2022-01-01',
    //         expiryDate:'2022-12-31'
    //     },
    //     {
    //         name:'Vijay Rao',
    //         age:40,
    //         relationship:'husband',
    //         insuredAmount:200000,
    //         startDate:'2022-01-01',
    //         expiryDate:'2022-12-31'
    //     },
    //     {
    //         name:'Anamika Rao',
    //         age:4,
    //         relationship:'daughter',
    //         insuredAmount:100000,
    //         startDate:'2022-01-01',
    //         expiryDate:'2022-12-31'
    //     },
    //     {
    //         name:'Vikram Rao',
    //         age:2,
    //         relationship:'son',
    //         insuredAmount:100000,
    //         startDate:'2022-01-01',
    //         expiryDate:'2022-12-31'
    //     }
    // ];

    // constructor(public dialog: )
    constructor(public dialog: MatDialog,
        private healthInsuranceService: HealthInsuranceService) {
        
    }

    // get insuranceDetails() {
    //     console.log(this.healthInsuranceService.getAllMemberDetails());
    //     this.insuranceDetailsForDisplay = this.healthInsuranceService.getAllMemberDetails();
    //     return this.healthInsuranceService.getAllMemberDetails();
    // }

    addMember() {
        this.popUpOpen = true;
        const dialogRef = this.dialog.open(EnrollmentComponent, {
            data:{}
        });

        dialogRef.afterClosed().subscribe(result =>{
            this.insuranceDetails = this.healthInsuranceService.getAllMemberDetails();
            this.insuranceDetailsForDisplay = this.insuranceDetails;
            console.log(this.insuranceDetailsForDisplay);
            this.popUpOpen = false;
        });
    }
    // openDialog() {
    //     this.dialog.open(EnrollmentComponent, {
    //         data: this.employeeN
    //     });
    // }
}