import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PhysicianService } from '../../physician.service';

export interface PeriodicElement {
  prescriptionId: number;
  prescriptionName: string;
  dosage: string;
  prescriptionNotes: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-viewprescriptionhistory',
  templateUrl: './viewprescriptionhistory.component.html',
  styleUrls: ['./viewprescriptionhistory.component.scss'],
})
export class ViewprescriptionhistoryComponent {
  constructor(private service: PhysicianService) {
    console.log('ertyui', this.oldnewvisitid);
  }

  ngOnInit() {
    this.getallPreviousPrescriptionbyvisitid();
  }
  displayedColumns: string[] = [
    'prescriptionId',
    'prescriptionName',
    'dosage',
    'prescriptionNotes',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  a: any;
  dataSource: any;
  prescriptiondata: any;
  oldnewvisitid: any;
  getallPreviousPrescriptionbyvisitid() {
    this.oldnewvisitid = this.service.getOldVisitId();
    this.oldnewvisitid = sessionStorage.getItem('abc');

    console.log('ertyui', this.oldnewvisitid);

    this.service.getPreviousPrescriptionRecordsByVisitId(this.oldnewvisitid);
    // .getPreviousPrescriptionRecordsByVisitId(16)
    // .subscribe((response) => {
    //   this.prescriptiondata = response;
    //   console.log(this.prescriptiondata);
    //   this.dataSource = new MatTableDataSource(this.prescriptiondata);
    //   this.dataSource.paginator = this.paginator;
    //});
  }
}
