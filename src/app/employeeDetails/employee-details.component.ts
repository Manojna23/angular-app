import { Component } from "@angular/core";
import { IEmployeeDetails } from "./employeeDetails.model";

@Component({
    selector: 'employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
    public val: string = 'title';
    public displayUpArrow: boolean = true;
    public nameAsc: boolean = true;
    public data: IEmployeeDetails[] = [
        {
            name: 'Raghav Acharya',
            department: 'Treasury',
            designation: 'Manager',
            role: 'Software Developer',
            yearsOfExperience: 5
        },
        {
            name: 'Riddhi Sharma',
            department: 'Capital',
            designation: 'Senior Manager',
            role: 'Software Developer',
            yearsOfExperience: 8
        },
        {
            name: 'Deepika Shah',
            department: 'Funding',
            designation: 'Senior Associate',
            role: 'QA',
            yearsOfExperience: 3
        },
        {
            name: 'Jane Doe',
            department: 'Treasury',
            designation: 'Manager',
            role: 'Scrum Master',
            yearsOfExperience: 4
        }
    ];

    public onArrowClick() {
        this.sortData();
        this.displayUpArrow = !this.displayUpArrow;
    }
    
    public sortData() {
        let sortedData: IEmployeeDetails[] = [];
        if(this.displayUpArrow) {
            sortedData = this.data.sort((a,b) => {
                return a.yearsOfExperience-b.yearsOfExperience;
            });
        } else {
            sortedData = this.data.sort((a,b) => {
                return b.yearsOfExperience-a.yearsOfExperience;
            })
        }
        this.data = sortedData;
    }

    public onNameArrowClick() {
        let sortedData: IEmployeeDetails[]=[];
        if(this.nameAsc) {
            sortedData = this.data.sort((a,b) => {
                return a.name.localeCompare(b.name);
            })
        } else {
            sortedData = this.data.sort((a,b) => {
                return b.name.localeCompare(a.name);
            })
        }
        this.nameAsc = !this.nameAsc;
    }
}