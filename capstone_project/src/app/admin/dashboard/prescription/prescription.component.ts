import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddPrescriptionDetailsComponent } from '../add-prescription-details/add-prescription-details.component';
import { ViewPrescriptionComponent } from '../view-prescription/view-prescription.component';

export interface PeriodicElement {
  id: number;
  testConducted: string;
  actualResult: string;
  status: string;
  remarks: string;
  action1: string;
  action2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    testConducted: 'Heart',
    actualResult: 'oliva M',
    status:
      'Early',
    remarks: 'in progress',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      'Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      'Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      'Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      ' Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      'Lorem ipsum dolor sit !',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
  {
    id: 1,
    testConducted: 'M.J. Mical',
    actualResult: '11-03-2022',
    status:
      'Lorem ipsum dolor sit amet  Accusantium vero molestiae temporibus!',
    remarks: 'Health Checkup',
    action1: 'Edit', action2: 'Delete'
  },
];
@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
  
export class PrescriptionComponent {

  constructor(private matDialog: MatDialog) {
  
  }

  openDialog() {
    this.matDialog.open(AddPrescriptionDetailsComponent),{
      Width: '800px'
    }
    
  }

  openDialog2() {
    this.matDialog.open(ViewPrescriptionComponent), {
      Width: '800px'
      
      

    }
  }
     displayedColumns: string[] = [
    'id',
    'testConducted',
    'actualResult',
    'status',
    'remarks',
    'action',
  ];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
  

}
