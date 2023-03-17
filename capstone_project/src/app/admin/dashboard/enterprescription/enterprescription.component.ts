import { FormGroup,ReactiveFormsModule,FormBuilder,Validator } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestapiService } from 'src/app/service/restapi.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-enterprescription',
  templateUrl: './enterprescription.component.html',
  styleUrls: ['./enterprescription.component.scss']
})
export class EnterprescriptionComponent {

  constructor(private matDialog: MatDialog ,private service:RestapiService,private http:HttpClient,private builder:FormBuilder) { }

  
  prescription: any = {};
  onSubmit() {
    this.service.enterePrescriptionFormData(this.prescription).
      subscribe(
        response => console.log(response),
        error => console.log(error)
        
    );
    console.log(this.prescription);
  }

  prescriptionForm = this.builder.group({
    
    
  })


   openDialogEnterPrescription() {
    this.matDialog.open(EnterprescriptionComponent),
      {
        Width: '800px',
      };
  }

}
