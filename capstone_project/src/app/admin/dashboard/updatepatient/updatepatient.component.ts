
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EnterprescriptionComponent } from '../enterprescription/enterprescription.component';
import { ViewprescriptionComponent } from '../viewprescription/viewprescription.component';
import { NewobservationComponent } from '../newobservation/newobservation.component';
import { EditobservationComponent } from 'src/app/admin/dashboard/editobservation/editobservation.component';
import { DeleteobservationComponent } from '../deleteobservation/deleteobservation.component';
import { RestapiService } from 'src/app/service/restapi.service';

export interface PeriodicElement {
  testId: number;
  testName: string;
  result: string;
  testNotes: string;
  // remarks: string;
  action1: string;
  action2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  
];

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.scss'],
})
export class UpdatepatientComponent implements AfterViewInit , OnInit {

  ngOnInit(): void {
    this.getallTest();
    this.getallPatient();
    this.getPatientbyId();
    
  }
  displayedColumns: string[] = [
    'testId',
    'testName',
    'result',
    'testNotes',
    // 'remarks',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private matDialog: MatDialog,private service:RestapiService ) { }

  testdata: any;
  getallTest() {
    this.service.getallTest().subscribe(response => {
      this.testdata = response;
      console.log(this.testdata);
    })
  
}
  
  patientdata:any
  getallPatient() {
    this.service.getallPatient().subscribe(response => {
      this.patientdata = response;
      console.log(this.patientdata)
    })
  }

  patientbyIdData:any
  getPatientbyId() {

    this.service.getPatientbyId(2).subscribe(response => {
      this.patientbyIdData = response;
      console.log(this.patientbyIdData)
    })
  }




  openDialogNewObservation() {
    this.matDialog.open(NewobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogEditObservation() {
    this.matDialog.open(EditobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogDeleteObservation() {
    this.matDialog.open(DeleteobservationComponent),
      {
        Width: '800px',
      };
  }

  openDialogEnterPrescription() {
    this.matDialog.open(EnterprescriptionComponent),
      {
        Width: '800px',
      };
  }
  openDialogViewPrescription() {
    this.matDialog.open(ViewprescriptionComponent),
      {
        Width: '800px',
      };
  }
}

