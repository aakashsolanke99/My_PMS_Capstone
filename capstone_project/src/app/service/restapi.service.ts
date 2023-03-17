import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  getallTest() {
    return this.http.get("http://localhost:8020/tests");
  }

  getallPatient() {
    return this.http.get("http://localhost:8010/patientinfo")
  }

  getallPrescription() {
    return this.http.get("http://localhost:8020/prescription")
  }

  getPatientbyId(patientId: number)
  {
    return this.http.get(`http://localhost:8010/patientinfo/${patientId}`)
  }

  enterePrescriptionFormData(data: any) {
    return this.http.post("http://localhost:8020/prescription",data)
  }
}
