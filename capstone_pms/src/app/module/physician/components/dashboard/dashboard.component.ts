import { DatePipe } from '@angular/common';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicianService } from '../../physician.service';
// import { PhysicianService } from 'src/app/service/physician.service';

export interface PeriodicElement {
  appointmentId: number;
  reason: string;
  date: string;
  acceptance: string;
  patientId: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'appointmentId',
    'reason',
    'date',
    'acceptance',
    'patientId',
    'action',
  ];

  constructor(private service: PhysicianService, public datepipe: DatePipe) {}
  ngOnInit(): void {
    this.getTodaysAppointment();

    this.getallPatient();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  currentDate: DatePipe = new DatePipe('en-us');
  dataSource: any;
  todaysAppointment: any;
  transformdate: any;
  email = 'physician1@gmail.com';
  status = 'acceptance=accepted';
  getTodaysAppointment() {
    var date = new Date();
    this.transformdate = this.currentDate.transform(date, 'dd-MM-YYYY');
    console.log(this.transformdate);
    this.service
      .getTodaysAppointment(this.email, this.transformdate, this.status)
      .subscribe((response) => {
        this.todaysAppointment = response;
        console.log(this.todaysAppointment);

        this.dataSource = new MatTableDataSource(this.todaysAppointment);
        this.dataSource.paginator = this.paginator;
      });
  }

  getpatientidbyclick(patientid: any, appointmentId: any) {
    sessionStorage.setItem('setid', patientid);
    sessionStorage.setItem('appointment_Id', appointmentId);
  }

  PatientId: any = sessionStorage.getItem('setid');

  // ngAfterViewInit() {
  //   // this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  patientdata: any;
  getallPatient() {
    this.service.getallPatient().subscribe((response) => {
      this.patientdata = response;
      console.log(this.patientdata);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
