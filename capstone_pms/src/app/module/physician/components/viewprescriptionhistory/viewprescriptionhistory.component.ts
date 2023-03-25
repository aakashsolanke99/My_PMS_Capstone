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
  constructor(private service: PhysicianService) {}

  ngOnInit() {}
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

  dataSource: any;
}
