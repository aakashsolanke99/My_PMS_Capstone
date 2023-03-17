import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PatientDetails { 
  id: number,
  testConducted: string,
  actualResult: string,
  status: string,
  remark: string
  
}

const ELEMENT_DATA: PatientDetails[] = [
  {
    id: 1,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  },
  {
    id: 2,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  },
  {
    id: 3,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  },
  {
    id: 4,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  },
  {
    id: 5,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  },
  {
    id: 6,
    testConducted: 'asdf',
    actualResult: 'asdf',
    status: 'asdf',
    remark: 'asdf'
  }

];

@Component({
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.scss']
})
export class PatienthistoryComponent{
  displayedColumns: string[] = ['id', 'testConducted', 'actualResult', 'status', 'remark'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  constructor(private matDialog: MatDialog) {
  }
  // @ViewChild(MatPaginator) paginator !: MatPaginator;
  // ngAfterViewInit(): void {
  //    this.dataSource.paginator = this.paginator;
  // }


  // openDialog2() {
  //   // this.matDialog.open(ViewPrescriptionComponent), {
  //   //   Width: '800px'
  //   // }
  // }
}
