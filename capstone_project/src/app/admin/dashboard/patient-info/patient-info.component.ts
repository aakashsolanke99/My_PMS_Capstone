import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewPrescriptionComponent } from '../view-prescription/view-prescription.component';


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
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'testConducted', 'actualResult', 'status', 'remark'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);
  constructor(private matDialog: MatDialog) {
  
  }
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator;
  }


  openDialog2() {
    this.matDialog.open(ViewPrescriptionComponent), {
      Width: '800px'
      
      

    }

  }
}
