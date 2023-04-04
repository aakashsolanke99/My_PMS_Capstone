import { PhysicianService } from './../../physician.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  prescriptionId: number;
  prescriptionName: string;
  dosage: string;
  prescriptionNotes: string;
}
const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss'],
})
export class ViewprescriptionComponent implements AfterViewInit {
  constructor(private service: PhysicianService) {}

  ngOnInit() {
    this.service.refreshNeeded.subscribe(() => {
      this.deletePrescriptionbyIdClick(this.prescriptionId);
    });
    this.getallPrescriptionbyvisitid();
  }
  displayedColumns: string[] = [
    'prescriptionId',
    'prescriptionName',
    'dosage',
    'prescriptionNotes',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  dataSource: any;
  visitId: any = sessionStorage.getItem('newVisitId');
  prescriptiondata: any;
  getallPrescriptionbyvisitid() {
    this.service
      .getallPrescriptionbyvisitiddata(this.visitId)
      .subscribe((response) => {
        this.prescriptiondata = response;
        this.dataSource = new MatTableDataSource(this.prescriptiondata);
        this.dataSource.paginator = this.paginator;
        console.log(this.prescriptiondata);
      });
  }

  prescriptionId: any;
  deletePrescriptionbyIdClick(prescriptionid: any) {
    this.prescriptionId = prescriptionid;

    this.service
      .deletePrescription(this.prescriptionId)
      .subscribe((response) => {
        this.prescriptionId = response;
        console.log('prescription is deleted of id ', this.prescriptionId);
      });
  }
}
