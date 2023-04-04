import { Injectable } from '@angular/core';
import { PatientData } from './components/patientinfo/patientinfo.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DoctorData } from './components/doctoravailability/doctoravailability.component';
import { NurseData } from './components/nurseinfo/nurseinfo.component';
import { AdminData } from './components/admininfo/admininfo.component';
import { tap } from 'rxjs/operators';
import { AddDoctor } from './components/adddoctor/adddoctor.component';
import { AddNurse } from './components/addnurse/addnurse.component';
import { AddAdmin } from './components/addadmin/addadmin.component';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public myVar: any;

  public currentRole: any;
  private apiServerDoctor =
    'http://localhost:9001/patient-health-records-service';

  private doctoravailabilityApi =
    'http://localhost:9001/physician-availability-service';
  private healthrecordApi =
    'http://localhost:9001/patient-health-records-service';
  private patientinfoApi = 'http://localhost:9001/patient-info-service';
  private appointmentApi = 'http://localhost:9001/appointment-service';
  private auth0Api = 'http://localhost:9001/auth0-service';

  constructor(private http: HttpClient) {}

  // auto-refresh
  private refresh = new Subject<void>();
  get refreshNeeded() {
    return this.refresh;
  }

  //set and roles for deletion
  public setRole(role: string) {
    this.currentRole = role;
  }
  public getRole() {
    return this.currentRole;
  }

  public getPatients(): Observable<PatientData[]> {
    return this.http.get<PatientData[]>(`${this.patientinfoApi}/patient`);
  }

  public getNurses(): Observable<NurseData[]> {
    return this.http.get<NurseData[]>(`${this.healthrecordApi}/nurses`);
  }

  public getAdmins(): Observable<AdminData[]> {
    return this.http.get<AdminData[]>(`${this.healthrecordApi}/admins`);
  }

  //Physician Availability List
  public availablePhysicians(): Observable<DoctorData[]> {
    return this.http.get<DoctorData[]>(
      `${this.doctoravailabilityApi}/physician-availability`
    );
  }

  //update
  public updatePhysicianAvailability(
    doctor: DoctorData
  ): Observable<DoctorData> {
    return (
      this.http
        .put<DoctorData>(
          `${this.doctoravailabilityApi}/physician-availability`,
          doctor
        )
        //auto-refresh
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        )
    );
  }

  public availablePhysiciansUpdate(
    doctor: DoctorData
  ): Observable<DoctorData[]> {
    return this.http.put<DoctorData[]>(
      `${this.doctoravailabilityApi}/physician-availability`,
      doctor
    );
  }

  public deletePhysicianAvailability(doctorEmail: string): Observable<void> {
    return this.http
      .delete<void>(
        `${this.doctoravailabilityApi}/physician-availability/${doctorEmail}`
      )
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  public deleteNurseDatabase(nurseEmail: string): Observable<void> {
    return this.http
      .delete<void>(`${this.healthrecordApi}/deleteNurse/${nurseEmail}`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  public deleteAdminFromDatabase(adminEmail: string): Observable<void> {
    return this.http
      .delete<void>(`${this.healthrecordApi}/deleteAdmin/${adminEmail}`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  public deleteDoctor(doctorEmail: string): Observable<void> {
    return this.http
      .delete<void>(`${this.auth0Api}/deleteUser/${doctorEmail}`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  public deleteNurse(nurseEmail: string): Observable<void> {
    return this.http
      .delete<void>(`${this.auth0Api}/deleteUser/${nurseEmail}`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  public deleteAdmin(adminEmail: string): Observable<void> {
    return this.http
      .delete<void>(`${this.auth0Api}/deleteUser/${adminEmail}`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  addPhysicianService(adddoc: AddDoctor): Observable<Object> {
    console.log('service data: ', adddoc);
    return this.http.post(`${this.auth0Api}/addUser`, adddoc);
  }

  //new
  addAdminService(addadmin: AddAdmin): Observable<Object> {
    return this.http.post(`${this.auth0Api}/addUser`, addadmin);
  }

  // new
  addNurseService(addnurse: AddNurse): Observable<Object> {
    return this.http.post(`${this.auth0Api}/addUser`, addnurse);
  }

  public setThatVar(sangeeta: string) {
    this.myVar = sangeeta;
  }

  public getThatVar() {
    return this.myVar;
  }

  public addDoctorUser(): Observable<DoctorData[]> {
    return this.http
      .get<DoctorData[]>(`${this.doctoravailabilityApi}/addDoctors`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  addAdminUser(): Observable<DoctorData[]> {
    return this.http
      .get<DoctorData[]>(`${this.healthrecordApi}/addAdmins`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  addNurseUser(): Observable<DoctorData[]> {
    return this.http
      .get<DoctorData[]>(`${this.healthrecordApi}/addNurses`)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  //Sangeeta
  public getAppointmentCount(): Observable<any> {
    return this.http.get<any>(`${this.appointmentApi}/appointmentCount`);
  }

  public getDoctorCount(): Observable<any> {
    return this.http.get<any>(`${this.doctoravailabilityApi}/doctorCount`);
  }

  public getPatientCount(): Observable<any> {
    return this.http.get<any>(`${this.patientinfoApi}/patientCount`);
  }

  public getNurseCount(): Observable<any> {
    return this.http.get<any>(`${this.healthrecordApi}/nurseCount`);
  }
}
