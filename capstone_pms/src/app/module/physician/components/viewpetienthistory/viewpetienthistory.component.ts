import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ViewprescriptionComponent } from '../viewprescription/viewprescription.component';
import { PhysicianService } from '../../physician.service';

export interface PeriodicElement {
  testId: number;
  testName: string;
  result: string;
  testNotes: string;
  visitId: number;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-viewpetienthistory',
  templateUrl: './viewpetienthistory.component.html',
  styleUrls: ['./viewpetienthistory.component.scss'],
})
export class ViewpetienthistoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['testId', 'testName', 'result', 'testNotes'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private matDialog: MatDialog,
    private service: PhysicianService
  ) {}

  ngOnInit(): void {
    this.getPatientbyId();
    // this.getAppointmentHistoryDetailsById();
    // this.getPrevioushealthrecordsBypatientId();
    // this.getAllTestByVisitId();

    throw new Error('Method not implemented.');
  }

  patientid: any = sessionStorage.getItem('setid');
  patientbyIdData: any;
  getPatientbyId() {
    console.log('this is patientid in history component ', this.patientid);
    this.service.getPatientbyId(this.patientid).subscribe((response) => {
      this.patientbyIdData = response;
      console.log('this is history', this.patientbyIdData);
    });
  }

  // myvisitId: any;
  // getPrevioushealthrecordsBypatientIdData: any;
  // getPrevioushealthrecordsBypatientId() {
  //   this.service
  //     .getPrevioushealthrecordsBypatientId(this.patientid)
  //     .subscribe((response) => {
  //       this.getPrevioushealthrecordsBypatientIdData = response;
  //       this.myvisitId = this.getPrevioushealthrecordsBypatientIdData.visitId;
  //       this.service.setOldVisitId(this.myvisitId);
  //       sessionStorage.setItem(
  //         'abc',
  //         this.getPrevioushealthrecordsBypatientIdData.visitId
  //       );
  //       // console.log(
  //       //   '######',
  //       //   this.getPrevioushealthrecordsBypatientIdData.visitId
  //       // );
  //       console.log(
  //         '*****************',
  //         this.getPrevioushealthrecordsBypatientIdData
  //       );
  //     });
  // }

  // oldtestdata: any;
  // oldvisitid: any;
  // getAllTestByVisitId() {
  //   // this.oldvisitid = this.service.getOldVisitId();
  //   this.oldvisitid = sessionStorage.getItem('abc');
  //   this.service.getPrevTests(this.oldvisitid).subscribe((response) => {
  //     this.oldtestdata = response;
  //     console.log(this.oldtestdata);
  //   });
  // }
  // testdata: any;
  // abcd: any = sessionStorage.getItem('abc');
  // getallTest() {
  //   console.log('----------', this.abcd);
  //   this.service.getPrevTests(this.abcd).subscribe((response) => {
  //     this.testdata = response;
  //     console.log(
  //       '11111111111111111111',
  //       this.getPrevioushealthrecordsBypatientIdData.visitId
  //     );
  //   });
  // }

  // visistdetailsdata: any;
  // getAppointmentHistoryDetailsById() {
  //   console.log(
  //     'this is patient id in getvisitdetailsbyid for history',
  //     this.patientid
  //   );
  //   this.service
  //     .getAppointmentHistoryDetailsById(this.patientid)
  //     .subscribe((response) => {
  //       this.visistdetailsdata = response;
  //       console.log('asdfghjkl', this.visistdetailsdata);
  //     });
  // }

  openDialogViewPrescription() {
    this.matDialog.open(ViewprescriptionComponent),
      {
        Width: '800px',
      };
  }
}
