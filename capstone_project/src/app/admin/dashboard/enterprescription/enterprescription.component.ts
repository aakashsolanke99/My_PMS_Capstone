import { FormGroup,ReactiveFormsModule,FormBuilder,Validator, NgForm } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestapiService } from 'src/app/service/restapi.service';
import { HttpClient } from '@angular/common/http';


export class Prescription{

  prescriptionName: any;
  dosage: any;
  prescriptionNotes: any;
  visitId: any;
}

@Component({
  selector: 'app-enterprescription',
  templateUrl: './enterprescription.component.html',
  styleUrls: ['./enterprescription.component.scss']
})
export class EnterprescriptionComponent implements OnInit{
  
  constructor(private matDialog: MatDialog ,private service:RestapiService,private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  prescription: Prescription = new Prescription();
  visitId = this.service.getvisitid();
  
  savePrescription() {
    this.service.addPrescription(this.prescription,this.visitId).subscribe(data => {
      console.log("visitID",this.visitId);
    },
    
      error => console.log(error)
    );
      
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
