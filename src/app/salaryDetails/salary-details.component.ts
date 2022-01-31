import { Component } from "@angular/core";
import { VERSION } from '@angular/core';
import { ColDef } from "ag-grid-community";

@Component({
    templateUrl: './salary-details.component.html'
})
export class SalaryDetailsComponent {
    public pageTitle: string = 'Salary slip history';
    
    public columnDefs: ColDef[] = [
        { field: 'Month' }, 
        { field: 'Salary' },
        { field: 'Designation' }
    ];

    public rowData = [
        { Month: 'January 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'February 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'March 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'April 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'May 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'June 2021', Salary: '1,50,000', Designation: 'Senior Associate'},
        { Month: 'July 2021', Salary: '3,00,000', Designation: 'Manager'},
        { Month: 'August 2021', Salary: '3,00,000', Designation: 'Manager'},
        { Month: 'September 2021', Salary: '3,00,000', Designation: 'Manager'},
        { Month: 'October 2021', Salary: '3,00,000', Designation: 'Manager'},
        { Month: 'November 2021', Salary: '3,00,000', Designation: 'Manager'},
        { Month: 'December 2021', Salary: '3,00,000', Designation: 'Manager'},
    ]
    
    
    constructor () {
        console.log('Angular version is:');
        console.log(VERSION.full);   
    }

}