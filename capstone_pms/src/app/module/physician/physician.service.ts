import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from './components/enterprescription/enterprescription.component';
import { Test } from './components/newobservation/newobservation.component';

@Injectable({
  providedIn: 'root',
})
export class PhysicianService {
  constructor(private http: HttpClient) {}

  //Todays accepted appointment
  getTodaysAppointment(
    physicianEmail: string,
    date: string,
    acceptance: string
  ) {
    return this.http.get(
      'http://localhost:8081/appointment/' +
        physicianEmail +
        '/' +
        date +
        '?' +
        acceptance
    );
  }

  rejectAppointment(appointmentId: any, acceptance: string) {
    return this.http.put(
      'http://localhost:8081/rejectedappointments/' +
        appointmentId +
        '/' +
        acceptance,
      ''
    );
  }

  //All pending appointments
  getPendingAppointments(physicianEmail: string, acceptance: string) {
    return this.http.get(
      'http://localhost:8081/appointment/' + physicianEmail + '?' + acceptance
    );
  }

  //get all visit detials by patient id
  getvisitdetailsbyid(appointmentId: any) {
    return this.http.get(
      `http://localhost:8082/patient/health-records/${appointmentId}`
    );
  }

  //Get visit history details by id
  getAppointmentHistoryDetailsById(patientId: any) {
    return this.http.get(
      `http://localhost:8081/appointment/${patientId}/previous`
    );
  }

  getPrevioushealthrecordsBypatientId(patientId: any) {
    return this.http.get(
      `http://localhost:8082/patient/Previous-health-records/${patientId}`
    );
  }

  getallTest() {
    return this.http.get('http://localhost:8082/tests');
  }

  getallPatient() {
    return this.http.get('http://localhost:9004/patientinfo');
  }

  getallPrescriptionbyvisitiddata(visitId: any) {
    return this.http.get(`http://localhost:8082/prescription/${visitId}`);
  }

  getPatientbyId(patientId: number) {
    return this.http.get(`http://localhost:9004/patientinfo/${patientId}`);
  }

  enterePrescriptionFormData(data: any) {
    return this.http.post('http://localhost:8082/prescription', data);
  }

  addPrescription(prescription: Prescription, visitId: any) {
    prescription.visitId = visitId;
    return this.http.post(
      'http://localhost:8082/patient/prescription',
      prescription
    );
  }

  addObservation(test: Test, visitId: any) {
    test.visitId = visitId;
    return this.http.post('http://localhost:8082/savetest', test);
  }

  deletetest(testId: any) {
    console.log(testId);
    return this.http.delete(`http://localhost:8082/tests/${testId}`);
  }

  getPrevTests(visitId: any) {
    return this.http.get(`http://localhost:8082/testByVisitId/${visitId}`);
  }

  //privious prescription in history component
  getPreviousPrescriptionRecordsByVisitId(visitId: any) {
    //localhost:8082/prescription/16
    return this.http.get(`http://localhost:8082/prescription/${visitId}`);
  }
  //accepted appointment
  acceptappointment(appointmentId: number, acceptance: String) {
    return this.http.put(
      'http://localhost:8081/appointments/' + appointmentId + '/' + acceptance,
      ''
    );
  }
  public myvar: any;
  public setvisitid(visitid: any) {
    this.myvar = visitid;
  }

  public getvisitid() {
    return this.myvar;
  }

  public oldvisitid: any;
  public setOldVisitId(visitid: number) {
    this.oldvisitid = visitid;
  }

  public getOldVisitId() {
    console.log('ssssssssssssss', this.oldvisitid);
    return this.oldvisitid;
  }
}
