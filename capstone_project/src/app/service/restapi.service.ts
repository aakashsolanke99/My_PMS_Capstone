import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from '../admin/dashboard/enterprescription/enterprescription.component';
import { Test } from '../admin/dashboard/newobservation/newobservation.component';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  getallTest() {
    return this.http.get("http://localhost:8082/tests");
  }

  getallPatient() {
    return this.http.get("http://localhost:8010/patientinfo")
  }

  getallPrescription() {
    return this.http.get("http://localhost:8020/prescription")
  }

  getPatientbyId(patientId: number)
  {
    return this.http.get(`http://localhost:8010/patientinfo/${patientId}`);
  }

  enterePrescriptionFormData(data: any) {
    return this.http.post("http://localhost:8020/prescription", data);
  }

  addPrescription(prescription: Prescription, visitId: any) {
    prescription.visitId = visitId;
    return this.http.post("http://localhost:8020/patient/prescription", prescription);
  }

  addObservation(test: Test,visitId:any) {
    test.visitId = visitId;
    return this.http.post("http://localhost:8082/savetest",test)
    
  }

  deletetest(testId: any) {
    console.log(testId);
  return this.http.delete(`http://localhost:8082/tests/${testId}`);
}


  public myvar:any
  public setvisitid(visitid: any) {
    this.myvar = visitid
  }

  public getvisitid() {
    return this.myvar;
  }
}
