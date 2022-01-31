import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employeeDetails/employee-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { SalaryDetailsComponent } from './salaryDetails/salary-details.component';
import { AddToCalendarModule } from 'add-events-to-google-calendar';
import { TimeBalancesComponent } from './timeBalances/time-balances.component';
import { EnrollmentComponent } from './healthInsurance/enrollement/enrollment.component';
import { HealthInsuranceComponent } from './healthInsurance/health-insurance.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HealthInsuranceService } from './healthInsurance/health-insurance.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmployeeDetailsComponent,
    SalaryDetailsComponent,
    TimeBalancesComponent,
    HealthInsuranceComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    AddToCalendarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'welcome', component: WelcomeComponent},
      { path:'employee-details', component: EmployeeDetailsComponent},
      { path:'salary-details', component: SalaryDetailsComponent},
      { path:'time-balances', component: TimeBalancesComponent},
      { path:'health-insurance', component: HealthInsuranceComponent}
    ])
  ],
  providers: [
    HealthInsuranceService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
