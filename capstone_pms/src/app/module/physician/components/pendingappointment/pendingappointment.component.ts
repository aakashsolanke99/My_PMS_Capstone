import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  ViewChild,
  AfterViewInit,
  Injectable,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PhysicianService } from '../../physician.service';
import { DeleteappointmentsComponent } from '../deleteappointments/deleteappointments.component';
import { AcceptappointmentsComponent } from '../acceptappointments/acceptappointments.component';
// import { DeleteappointmentsComponent } from '../deleteappointments/deleteappointments.component';
// import { AcceptappointmentsComponent } from '../acceptappointments/acceptappointments.component';
// import { PhysicianService } from 'src/app/service/physician.service';

export interface PeriodicElement {
  appointmentId: number;
  reason: string;
  date: string;
  acceptance: string;
  patientId: number;
  // physicianEmail: string;
  submissionDate: string;
  action1: string;
  action2: string;
}

export class EmailData {
  toMail: any;
  subject: any;
  message: any;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-pendingappointment',
  templateUrl: './pendingappointment.component.html',
  styleUrls: ['./pendingappointment.component.scss'],
})
export class PendingappointmentComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.getPendingAppointments();
    this.getPatientbyId();
    throw new Error('Method not implemented.');
  }
  // Date picker disable previous dates
  title = 'datePicker';
  currentDate: any = new Date();

  ordinaryDateSelected!: Date;

  displayedColumns: string[] = [
    'appointmentId',
    'patientId',
    'reason',
    'date',
    'acceptance',
    // 'physicianEmail',
    'submissionDate',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // durationInSecond = 5;
  constructor(
    private snakBar: MatSnackBar,
    private service: PhysicianService,
    private matDialog: MatDialog,
    public datepipe: DatePipe
  ) {
    this.emaildata = new EmailData();
  }

  email: any = sessionStorage.getItem('currentUserEmail');
  dataSource: any;
  pendingAppointmnt: any;
  getPendingAppointments() {
    this.service
      .getPendingAppointments(this.email, 'acceptance=Pending')
      .subscribe((response) => {
        this.pendingAppointmnt = response;
        sessionStorage.setItem('bookingDate', this.pendingAppointmnt.date);
        console.log(this.pendingAppointmnt);
        this.dataSource = new MatTableDataSource(this.pendingAppointmnt);
        this.dataSource.paginator = this.paginator;
      });
  }

  //delete Appointments
  rejectAppointment(appointmentId: any) {
    sessionStorage.setItem('appointmentid', appointmentId);
  }

  //Accept appointments
  acceptappointment(appointmentId: any, patientId: any, bookingDate: any) {
    sessionStorage.setItem('appointmentid', appointmentId);
    sessionStorage.setItem('patientIdForEmail', patientId);
    sessionStorage.setItem('bookingDate', bookingDate);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialogAcceptAppointments() {
    this.matDialog.open(AcceptappointmentsComponent),
      {
        Width: '800px',
      };
  }
  patientbyIdData: any;
  patientEmail: any;
  patientId: any = sessionStorage.getItem('patientIdForEmail');
  physicianName: any = sessionStorage.getItem('physicianName');
  bookingDate: any = sessionStorage.getItem('bookingDate');

  getPatientbyId() {
    console.log('this is patient id in getPatientbyId ', this.patientId);
    this.service.getPatientbyId(this.patientId).subscribe((response) => {
      this.patientbyIdData = response;
      this.patientEmail = this.patientbyIdData.email;
      sessionStorage.setItem('patientName', this.patientbyIdData.firstName);
      console.log(
        'patient id for email',
        this.patientbyIdData.firstName,
        this.patientId,
        this.physicianName,
        this.patientEmail,
        this.bookingDate
      );
    });
  }

  emaildata: any;

  patientName: any = sessionStorage.getItem('patientName');
  //Email service
  successMessage: any;
  acceptedAppointmentEmail() {
    this.emaildata.message =
      'Hii' +
      this.patientName +
      ' ! \n Your appointment of date with dr. ' +
      this.physicianName +
      ' is accpted. Please come on time. Thank You !';
    this.emaildata.subject = 'Appoitnment Accepted';
    this.emaildata.toMail = this.patientEmail;
    console.log('email data', this.emaildata);
    this.service.welcome().subscribe(data=>{
      console.log(data);
    })
    this.service
      .acceptedAppointmentEmail(this.emaildata)
      .subscribe((response) => {
        this.successMessage = response;
        console.log('mail send successfull ', this.successMessage);
      });
  }

  openDialogDeleteAppointments() {
    this.matDialog.open(DeleteappointmentsComponent),
      {
        Width: '800px',
      };
  }

  openAcceptSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }

  openrejectSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }
}
