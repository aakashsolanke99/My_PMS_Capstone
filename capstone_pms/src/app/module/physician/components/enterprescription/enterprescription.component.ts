import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhysicianService } from 'src/app/module/physician/physician.service';
import { MatDialogRef } from '@angular/material/dialog';

export class Prescription {
  prescriptionName: any;
  dosage: any;
  prescriptionNotes: any;
  visitId: any;
}

@Component({
  selector: 'app-enterprescription',
  templateUrl: './enterprescription.component.html',
  styleUrls: ['./enterprescription.component.scss'],
})
export class EnterprescriptionComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private service: PhysicianService,
    private http: HttpClient,
    private matdialogRef: MatDialogRef<EnterprescriptionComponent>
  ) {}
  ngOnInit(): void {}

  prescription: Prescription = new Prescription();

  visitId = sessionStorage.getItem('visitId');
  savePrescription() {
    this.service.addPrescription(this.prescription, this.visitId).subscribe(
      (data) => {
        console.log('visitID', this.visitId);
      },

      (error) => console.log(error)
    );
    this.matdialogRef.close();
  }

  onSubmit() {
    console.log(this.prescription);
    this.savePrescription();
  }

  openDialogEnterPrescription() {
    this.matDialog.open(EnterprescriptionComponent),
      {
        Width: '800px',
      };
  }
}
