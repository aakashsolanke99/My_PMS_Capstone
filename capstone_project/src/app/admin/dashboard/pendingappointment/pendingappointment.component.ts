import { Component, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  position: number;
  name: string;
  bookedOn: string;
  notes: string;
  diagonosis: string;
  action1: string;
  action2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'M.J. Mical',
    bookedOn: '11-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 2,
    name: 'Sanath Deo',
    bookedOn: '15-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 3,
    name: 'Loera Phanj',
    bookedOn: '13-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 4,
    name: 'Komola Haris',
    bookedOn: '14-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 5,
    name: 'M.J. Mical',
    bookedOn: '22-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 6,
    name: 'Sanath Deo',
    bookedOn: '13-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 7,
    name: 'Loera Phanj',
    bookedOn: '23-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 8,
    name: 'Komola Haris',
    bookedOn: '19-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 9,
    name: 'M.J. Mical',
    bookedOn: '20-02-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 10,
    name: 'Sanath Deo',
    bookedOn: '14-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Health Checkup',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 11,
    name: 'Loera Phanj',
    bookedOn: '11-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Report',
    action1: 'Accept',
    action2: 'Reject',
  },
  {
    position: 12,
    name: 'Komola Haris',
    bookedOn: '22-03-2022',
    notes:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit aspernatur minus. Error dicta accusamus sit! Accusantium vero molestiae temporibus!',
    diagonosis: 'Common COld',
    action1: 'Accept',
    action2: 'Reject',
  },
];

@Component({
  selector: 'app-pendingappointment',
  templateUrl: './pendingappointment.component.html',
  styleUrls: ['./pendingappointment.component.scss'],
})
export class PendingappointmentComponent implements AfterViewInit {
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
    this.dataSource.paginator = this.paginator;
  }

  // durationInSecond = 5;
  constructor(private snakBar: MatSnackBar) {}
  openAcceptSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }
  openrejectSnackbar(message: string, action: string) {
    let snakBarRef = this.snakBar.open(message, action, { duration: 3000 });
    snakBarRef.afterDismissed().subscribe();

    snakBarRef.onAction().subscribe();
  }
}
