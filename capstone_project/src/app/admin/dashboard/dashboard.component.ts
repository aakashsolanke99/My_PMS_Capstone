import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'M.J. Mical', weight: "Health Checkup", symbol: '09:30 AM'},
  {position: 2, name: 'Sanath Deo', weight: "Health Checkup", symbol: '12:30 Pm'},
  {position: 3, name: 'Loera Phanj', weight: "Report", symbol: '03:30 PM'},
  {position: 4, name: 'Komola Haris', weight: "Common COld", symbol: '06:30 PM'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
