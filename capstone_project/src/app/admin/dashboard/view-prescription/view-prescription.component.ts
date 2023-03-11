import { Component } from '@angular/core';


export interface PeriodicElement {
  id: number;
  medicineName: string;
  dosage: string;
  notes: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    medicineName: 'Ranbaxy',
     dosage : '1-1-0',
    notes:
      'Accusantium vero molestiae temporibus!',
  },
    {
    id: 1,
    medicineName: 'Ranbaxy',
     dosage : '1-1-0',
    notes:
      'Accusantium vero molestiae temporibus!',
  },
      {
    id: 1,
    medicineName: 'Ranbaxy',
     dosage : '1-1-0',
    notes:
      'Accusantium vero molestiae temporibus!',
  },
        {
    id: 1,
    medicineName: 'Ranbaxy',
     dosage : '1-1-0',
    notes:
      'Accusantium vero molestiae temporibus!',
  },
  
];

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.scss']
})
export class ViewPrescriptionComponent {

   displayedColumns: string[] = ['id', 'medicineName', 'dosage', 'notes'];
  dataSource = ELEMENT_DATA;

}
