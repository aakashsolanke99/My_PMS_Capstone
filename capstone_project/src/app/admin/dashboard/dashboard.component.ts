import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  bookedOn: string;
  notes: string;
  diagonosis: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'M.J. Mical',
    bookedOn: '09:30 AM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 2,
    name: 'Sanath Deo',
    bookedOn: '12:30 Pm',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 3,
    name: 'Loera Phanj',
    bookedOn: '03:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action: 'Update',
  },
  {
    position: 4,
    name: 'Komola Haris',
    bookedOn: '06:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action: 'Update',
  },
  {
    position: 5,
    name: 'M.J. Mical',
    bookedOn: '09:30 AM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 6,
    name: 'Sanath Deo',
    bookedOn: '12:30 Pm',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 7,
    name: 'Loera Phanj',
    bookedOn: '03:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action: 'Update',
  },
  {
    position: 8,
    name: 'Komola Haris',
    bookedOn: '06:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action: 'Update',
  },
  {
    position: 9,
    name: 'M.J. Mical',
    bookedOn: '09:30 AM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 10,
    name: 'Sanath Deo',
    bookedOn: '12:30 Pm',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action: 'Update',
  },
  {
    position: 11,
    name: 'Loera Phanj',
    bookedOn: '03:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action: 'Update',
  },
  {
    position: 12,
    name: 'Komola Haris',
    bookedOn: '06:30 PM',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action: 'Update',
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'bookedOn',
    'notes',
    'diagonosis',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
