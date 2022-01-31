import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HealthInsuranceService } from "../health-insurance.service";

@Component({
    selector:'enrollment',
    templateUrl:'./enrollment.component.html'
})
export class EnrollmentComponent implements OnInit{

    public insuranceForm!: FormGroup;
    // @Input() employeeName: string = '';
    employeeName: string = '';

    constructor(private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<EnrollmentComponent>,
        private healthInsuranceService: HealthInsuranceService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit(): void {
        this.insuranceForm = this.formBuilder.group({
            name: [this.data.name, [Validators.required]],
            age: [this.data.age, [Validators.required]],
            relationship: [this.data.relationship, [Validators.required]],
            insuredAmount: [this.data.insuredAmount, [Validators.required]],
            startDate: [this.data.startDate, [Validators.required]],
            expiryDate: [this.data.expiryDate, [Validators.required]],
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    
    onSubmit(){
        this.healthInsuranceService.addMember(this.insuranceForm.value);
        this.dialogRef.close();
    }
}